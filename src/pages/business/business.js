import React from "react";
import { Container, Col, Button, Row, Card } from "react-bootstrap";
import "./business.css";
import dashboardDark from "../../images/dashboard-dark.svg";
import businessArrow from "../../images/business-arrow.svg";
import businessArrowWhite from "../../images/business-arrow-white.svg";
import star from "../../images/star.svg";
import blueStar from "../../images/blue-star.svg";
import disc from "../../images/disc.svg";
import overlay from "../../images/overlay.svg";
import dashboardLight from "../../images/dashboard-light.svg";
import api from "../../images/api.svg";

function Business() {
  return (
    <Container>
      <Col className="d-flex business-hero-section">
        <Col className="business-hero-text">
          <h5>
            Expand the giftcard industry,{" "}
            <b className="text-primary">one card</b> at a time!{" "}
            <img
              src={blueStar}

              // className="chevron-arrow"
            />
          </h5>
          <small>
            Digift helps businesses connect with customers by letting them offer
            their business gift cards to a large number of people.
          </small>
          <div>
            <Button className="business-hero-buttons" variant="primary">
              Get Started{" "}
              <img src={businessArrowWhite} className="business-image" />
            </Button>
            <Button className="business-hero-link" variant="link">
              Sign In <img src={businessArrow} className="business-image" />
            </Button>
          </div>
        </Col>
        <Col>
          <img
            src={dashboardDark}
            alt="dashboard-dark"
            className="dashboard-dark"
          />
        </Col>
      </Col>
      <Col className=" business-overlay  ">
        <img src={overlay} alt="overlay" />
      </Col>
      <Col className="bg-primary d-flex business-billboard">
        <div>
          <img
            src={star}

            // className="chevron-arrow"
          />
          <small className="business-billboard-subtext">
            Digift helps businesses{" "}
          </small>
        </div>
        <div className="business-billboard-title">
          <h5>
            Why do fast-growing <br></br> merchant and vendor<br></br> choose{" "}
            <img
              src={disc}

              // className="chevron-arrow"
            />{" "}
            us
          </h5>
          <small>
            Whether you’re a business looking to sell your own gift cards, a
            company looking for bulk gift card solution, digift is for you.
          </small>
          <Button variant="link">Create an account today</Button>
        </div>
      </Col>
      <Col className="d-flex design">
        <Col>
          <Card className="business-card">
            <Card.Body>
              <Card.Title className="business-card-title">
                Designed for <br></br> today’s{" "}
                <b className="text-primary">ambitious</b> <br></br> businesses.
              </Card.Title>
              <Card.Text className="business-card-text">
                We give merchants the ability to sell digital Gift Cards for
                their business quickly, intuitively and affordably.
              </Card.Text>
              <Card.Img
                src={dashboardLight}
                className="business-card-image"
              ></Card.Img>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="business-card">
            <Card.Body>
              <Card.Title className="business-card-title">
                Features that<br></br> <b className="text-primary">empower</b>{" "}
                your<br></br> business
              </Card.Title>
              <Card.Text className="business-card-text">
                Automate your sales and marketing so you can focus on other
                areas of your business.
              </Card.Text>
              <Card.Img
                src={dashboardLight}
                className="business-card-image"
              ></Card.Img>
            </Card.Body>
          </Card>
        </Col>
      </Col>
      <Col className="d-flex business-hero-section">
        <Col className="business-hero-text">
          <h5>
            Our API is built to <br></br> be as{" "}
            <b className="text-primary">lightweight</b> <br></br>and efficient
            as <br></br> possible.
          </h5>
          <small>
            We offer client and server libraries in everything from our API
          </small>
          <div>
            <Button className="business-hero-buttons" variant="primary">
              Get Started <img src={businessArrowWhite} className="image" />
            </Button>
            <Button className="business-hero-link" variant="link">
              Sign In <img src={businessArrow} className="image" />
            </Button>
          </div>
        </Col>
        <Col>
          <img src={api} className="dashboard-dark" />
        </Col>
      </Col>
    </Container>
  );
}

export default Business;
