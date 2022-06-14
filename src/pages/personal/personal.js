import { Button, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import amazonCard from "../../images/amazon-card.svg";
import atmCard from "../../images/atm-card.svg";
import overlay from "../../images/overlay.svg";
import "./personal.css";
import Arrivals from "../../components/arrivals/arrivals";
import Reviews from "../../components/reviews/reviews";
import curls from "../../images/curls.svg";
import curlsRight from "../../images/curls-right.svg";

function Personal() {
  return (
    <Container className="d-flex  hero-section ">
      <Col className=" overlay  ">
        <img src={overlay} alt="overlay" />
      </Col>
      <Col className="d-flex bg-primary hero-section-cover rounded">
        <Col className="amazon-card-wrapper">
          <img
            src={amazonCard}
            //   width={35}
            //   height={35}
            className=" d-inline-block align-top amazon-card "
            alt="amazon-card"
          />
        </Col>
        <Col className="hero-text">
          <h1>
            <img src={curls} alt="curls" className="curls-left" />
            Eliminate bank
            <img src={curlsRight} className="curls" alt="curls-right" />{" "}
            restrictions with our unique gift cards.
          </h1>
          <span className="hero-subtext">
            Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities and
            even more.
          </span>
          <div>
            <Button variant="light" size="md" className="shopping">
              Start Shopping
            </Button>
          </div>
        </Col>
        <Col className="atm-card-wrapper">
          <img
            src={atmCard}
            //   width={35}
            //   height={35}
            className=" d-inline-block align-top atm-card "
            alt="amazon-card"
          />
        </Col>{" "}
      </Col>
      {/* <Col>
        <img src={overlay} className=" overlay  " alt="amazon-card" />
      </Col> */}
      <Arrivals />
      <Reviews />
    </Container>
  );
}

export default Personal;
