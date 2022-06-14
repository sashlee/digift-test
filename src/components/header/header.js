import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.svg";
import arrowRight from "../../images/arrow-right.svg";
import "./header.css";
import Col from "react-bootstrap/Col";
import { InputGroup } from "react-bootstrap";
import search from "../../images/search.svg";
import toggle from "../../images/toggle.svg";
import line from "../../images/line.svg";
import digift from "../../images/digift.svg";
import glitter from "../../images/glitter.svg";
import { ThemeContext, themes } from "../theme/context";

function Header() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container fluid className="p-0">
        <Navbar.Brand href="/">
          <img src={logo} className=" d-inline-block align-top" alt="Digift" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="collapse">
          <Nav navbarScroll>
            <Nav.Link href="/personal" className="header-nav">
              Personal{" "}
              <img
                src={arrowRight}
                alt="arrow-right"
                className="chevron-arrow"
              />
            </Nav.Link>
            <hr className="vertical-line"></hr>
            <Nav.Link href="/business" className="header-nav">
              Business{" "}
              <img
                src={arrowRight}
                alt="arrow-right"
                className="chevron-arrow"
              />
            </Nav.Link>
            <hr className="vertical-line"></hr>
          </Nav>
          <Form className="d-flex form">
            <Col sm={10}>
              <InputGroup>
                <InputGroup.Text className="search">
                  <img
                    src={search}
                    alt="search"
                    // className="chevron-arrow"
                  />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Find cards anywhere"
                  className="search-input"
                />
              </InputGroup>
            </Col>
          </Form>{" "}
          {/* <img
            src={toggle}
            alt="toggle"
            // className="chevron-arrow"
          /> */}
          {/* <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
              </Button>
            )}
          </ThemeContext.Consumer> */}
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <img
                src={toggle}
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              />
            )}
          </ThemeContext.Consumer>
          {/* <button
            className="header-toggle-buttons"
            onClick={() => toggleTheme()}
          >
            {theme}
          </button> */}
          <img src={line} alt="line" className="line" />
          <Col className="d-flex login">
            <Nav.Link href="#" className="login">
              Login
            </Nav.Link>
            <Button variant="primary">
              Get Started{" "}
              <img
                src={glitter}
                alt="glitter"
                // className="chevron-arrow"
              />
            </Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
