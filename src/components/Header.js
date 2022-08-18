import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container, Navbar, Nav, Dropdown, Button } from "react-bootstrap";

import Logo from "../images/logo.png";
import Link from "./Link";

const Header = ({ siteTitle }) => {
  const navLinks = [
    { name: "Coverage", to: "/coverage" },
    { name: "About", to: "/about" },
<<<<<<< HEAD
<<<<<<< HEAD
    // { name: "Our Tech", to: "/technology" },
    { name: "Team", to: "/team" },
    // { name: "Merch", to: "https://vngle-merch-demo.square.site/" },
=======
    { name: "Our Tech", to: "/technology" },
    { name: "Team", to: "/team" },
    { name: "Merch", to: "https://vngle-merch-demo.square.site/" },
>>>>>>> f2747a7 (Create initial coverage page (#60))
=======
    // { name: "Our Tech", to: "/technology" },
    { name: "Team", to: "/team" },
    // { name: "Merch", to: "https://vngle-merch-demo.square.site/" },
>>>>>>> 57a2b90 (Hide some tabs)
  ];
  const dropdownLinks = [
    { name: "Follow our Movement", to: "http://eepurl.com/g1cJk5" },
    // {
    //   name: "Become a Reporter",
    //   to: "https://forms.gle/JuxuSvst9aJTiDAk6",
    // },
    // {
    //   name: "Request Coverage",
    //   to: "https://vngle.typeform.com/to/zwc2R2og",
    // },
    { name: "Be a Vngler", to: "/vngler" },
    { name: "Become an Ally: Grow with Us", to: "/ally" },
    { name: "Submit a Tip", to: "https://forms.gle/ezGNfYqZTqMUD8YZ9" },
  ];

  const dropdownLinksServices = [
    { name: "Newswire", to: "/services/news-wire" },
    { name: "Creative Content Strategy", to: "/services/creative-content" },
    { name: "New Media Workshops", to: "/services/newMediaWorkshops" },
  ];

<<<<<<< master
  const dropdownLinksServices = [
    { name: "Newsire", to: "/services/news-wire" },
    { name: "Creative Content", to: "/services/creative-content" },
    { name: "New Media Workshops", to: "/services/newMediaWorkshops" },
  ];

=======
>>>>>>> Updates
  return (
    <StyledHeader>
      <Navbar collapseOnSelect expand="lg" className="p-4">
        <Container>
          <Navbar.Brand>
            <Link to="/" title={siteTitle}>
              <img alt="Vngle logo" src={Logo} height="90" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end text-center">
            <Nav>
<<<<<<< HEAD
              <Dropdown className="nav-item">
=======
              {/* <Dropdown className="nav-item">
>>>>>>> f2747a7 (Create initial coverage page (#60))
                <Dropdown.Toggle
                  className="menu-dropdown-toggle nav-link"
                  as="a"
                >
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownLinksServices.map((link, i) => {
                    return (
                      <Dropdown.Item as="div" key={i} role="menu-item">
                        <Link to={link.to}>{link.name}</Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
<<<<<<< HEAD
              </Dropdown>
=======
              </Dropdown> */}
>>>>>>> f2747a7 (Create initial coverage page (#60))

              {navLinks.map((link, i) => {
                return (
                  <Nav.Item as="div" key={i} className="mx-lg-2">
                    <Link to={link.to} className="nav-link">
                      {link.name}
                    </Link>
                  </Nav.Item>
                );
              })}

              {/* <Dropdown>
                <Dropdown.Toggle as={Button} className="services">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownLinksServices.map((link, i)=>{
                    return(
                      <Dropdown.Item as="div" key={i} role="menu-item">
                        <Link to={link.to}>{link.name}</Link>
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown> */}

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Button} className="ml-lg-2">
                  Get Involved
                </Dropdown.Toggle>
                <Dropdown.Menu role="menu">
                  {dropdownLinks.map((link, i) => {
                    return (
                      <Dropdown.Item as="div" key={i} role="menu-item">
                        <Link to={link.to}>{link.name}</Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const StyledHeader = styled.header`
  & {
    background: rgba(247, 247, 247, 0.73);
    position: sticky;
<<<<<<< HEAD
<<<<<<< HEAD
    top: 0;
=======
    top: 0;  
>>>>>>> f2747a7 (Create initial coverage page (#60))
=======
    top: 0;
>>>>>>> 57a2b90 (Hide some tabs)
    z-index: 1001;

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 2rem;
      top: 0;
      opacity: 0.9;
      background-color: var(--bs-body-bg);
      width: 90%;
      z-index: 10;
      position: fixed;
      top: 0;
      .navbar-nav {
        .nav-link,
        .btn {
          color: var(--bs-dark);
          font-weight: bold;
          font-size: 1.25rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--bs-primary);
          transition: color 0.3s;
        }

        .dropdown-item a {
          color: var(--bs-dark);
          text-decoration: none;
        }
      }
      .menu-dropdown-toggle {
        background: transparent;
        border-color: transparent;
        cursor: pointer;
      }
      .navbar-toggler {
        border: none;
        font-size: 1.5rem;

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(30, 28, 33)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
      }
    }
  }
`;

export default Header;
