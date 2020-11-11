import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import styled from "styled-components";
import axios from "axios";

const InstaFeed = ({ hashTags }) => {
  const [instaFeed, setInstaFeed] = useState([]);
  const [instaInfo, setInstaInfo] = useState({
    has_next_page: true,
  });
  const [loading, setLoading] = useState(true);
  const endpoint = "https://www.instagram.com/graphql/query/";
  const queryHash = "15bf78a4ad24e33cbd838fdb31353ac1"; // public; no need to hide
  const hashTagString = hashTags.map(hashTag => `#${hashTag}`).join(" ");

  // fetch more insta data when scroll to end
  // may want to switch to GraphQL
  const fetchNext = useCallback(async () => {
    let nextFeed = [];
    let pageInfo = instaInfo;

    while (nextFeed.length === 0 && pageInfo.has_next_page) {
      const response = await axios.get(endpoint, {
        params: {
          query_hash: queryHash,
          variables: {
            id: "4046633900",
            first: 12,
            after: pageInfo.end_cursor,
          },
        },
      });

      const data = response.data.data.user.edge_owner_to_timeline_media;

      nextFeed = data.edges.filter(({ node }) => {
        const caption = node.edge_media_to_caption.edges[0].node.text;

        return caption.includes(hashTagString);
      });
      pageInfo = data.page_info;
    }

    setInstaFeed([...instaFeed, ...nextFeed]);
    setInstaInfo(pageInfo);
    setLoading(false);
  }, [hashTagString, instaFeed, instaInfo]);

  // TOFIX: Memory leak when unmounted (moved to another page) and fetching in progress
  // fetch Instagram feed data at initial render
  useEffect(() => {
    // fetch insta using axios
    // merge with fetchNext() in future
    const fetchInstaFeed = async () => {
      const response = await axios.get(endpoint, {
        params: {
          query_hash: queryHash,
          variables: {
            id: "4046633900",
            first: 50,
          },
        },
      });

      if (response.status === 200) {
        const data = response.data.data.user.edge_owner_to_timeline_media;

        setInstaFeed(
          data.edges.filter(({ node }) => {
            const caption = node.edge_media_to_caption.edges[0].node.text;

            return caption.includes(hashTagString);
          })
        );
        setInstaInfo(data.page_info);
        setLoading(false);
      }
    };

    fetchInstaFeed();
  }, [hashTagString]);

  // when insta feed & info is updated, check if feed is empty. If yes, try fetching next batch
  useEffect(() => {
    if (instaFeed.length === 0 && instaInfo.has_next_page) {
      fetchNext();
    }
  }, [instaFeed, instaInfo, hashTagString, fetchNext]);

  return (
    <InfiniteScroll
      dataLength={instaFeed.length}
      next={fetchNext}
      hasMore={instaInfo.has_next_page}
      className="text-center"
      style={{ overflow: "visible" }}
      scrollThreshold={0.5}
    >
      <Row>
        {!loading &&
          instaFeed.map(post => {
            const caption = post.node.edge_media_to_caption.edges[0].node.text;

            return (
              <PostContainer
                key={post.node.id}
                lg={3}
                md={4}
                sm={6}
                className="mb-4"
              >
                <p>{caption}</p>
                <div className="shade-overlay shadow rounded">
                  {/* use Gatsby Image on fetched images */}
                  <img
                    alt="post"
                    src={post.node.thumbnail_src}
                    width="100%"
                    className="shadow"
                  />
                </div>
                <Link
                  to={`/stories/${post.node.shortcode}`}
                  className="stretched-link"
                />
              </PostContainer>
            );
          })}
      </Row>
    </InfiniteScroll>
  );
};

const PostContainer = styled(Col)`
  position: relative;
  text-align: left;
  color: white;

  p {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  img {
    position: relative;
    z-index: -1;
  }

  .shade-overlay {
    background: linear-gradient(
      180deg,
      rgba(33, 37, 41, 0) 0%,
      rgba(33, 37, 41, 0.5) 70%,
      rgba(33, 37, 41, 0.9) 100%
    );
    overflow: hidden;
  }
`;

InstaFeed.propTypes = {
  hashTags: PropTypes.array,
};

InstaFeed.defaultProps = {
  hashTags: [],
};

export default InstaFeed;
