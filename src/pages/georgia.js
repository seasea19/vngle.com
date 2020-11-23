import React from "react";
import styled from "styled-components";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import StorySlider from "../components/StorySlider";
import NewsSubCard from "../components/NewsSubCard";

const GeorgiaPage = () => {
  return (
    <Layout>
      <SEO title={`Georgia`} />

      <StyledJumbotron>
        <CoverImage src="https://source.unsplash.com/tjdu7p_PaEM" alt="" />
        <Row className="align-items-end">
          <Col>
            <h1 className="display-1">Georgia</h1>
          </Col>
        </Row>
      </StyledJumbotron>

      <Container>
        <StorySlider fetchNum={50} interval={10000} hashTags={["Georgia"]} />
        <NewsSubCard />
      </Container>
    </Layout>
  );
};

const StyledJumbotron = styled(Jumbotron)`
  position: relative;
  background-color: transparent;
  color: ${props => props.theme.colors.light};
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 0) 0%,
    rgba(33, 37, 41, 0.3) 50%,
    rgba(33, 37, 41, 0.9) 100%
  );
  padding-top: 9rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: 800;
    text-align: center;
  }

  h4 {
    font-family: Inter, sans-serif;
  }

  .row {
    align-items: center;
  }
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export default GeorgiaPage;