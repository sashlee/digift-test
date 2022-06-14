import "./reviews.css";
import { Col, Card, Container } from "react-bootstrap";
import avatar from "../../images/avatar.svg";
import curls from "../../images/curls.svg";
import overlay from "../../images/overlay.svg";
function Reviews() {
  return (
    <Container>
      <Col className="caption">
        <h1>“Hear what happy customers are saying about Digift”</h1>
      </Col>
      <Col className="d-flex review">
        <Col>
          <Card className="review-card">
            <Card.Body>
              <Card.Text className="review-card-text">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria.”
              </Card.Text>
              <Col className="d-flex review-card-footer">
                <Card.Img variant="left" width={40} src={avatar}></Card.Img>

                <Col className=" review-card-footer">
                  <h6 className="mb-0">Osemwengie Benjamin</h6>
                  <span className="review-card-footer-text">
                    Product Designer at Digift
                  </span>
                </Col>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="review-card">
            <Card.Body>
              <Card.Text className="review-second-card-text">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria. Digift stood out from the crowd with an impressive team
                and even more impressive mission ”
              </Card.Text>
              <Col className="d-flex review-card-footer">
                <Card.Img variant="left" width={40} src={avatar}></Card.Img>

                <Col className=" review-card-footer">
                  <h6 className="mb-0">Osemwengie Benjamin</h6>
                  <span className="review-card-footer-text">
                    Product Designer at Digift
                  </span>
                </Col>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="review-card w-auto">
            <Card.Body>
              <Card.Text className="review-third-card-text">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria.”
              </Card.Text>
              <Col className="d-flex review-card-footer">
                <Card.Img variant="left" width={40} src={avatar}></Card.Img>

                <Col className=" review-card-footer">
                  <h6 className="mb-0">Osemwengie Benjamin</h6>
                  <span className="review-card-footer-text">
                    Product Designer at Digift
                  </span>
                </Col>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Col>
      <Col className=" review-overlay  ">
        <img src={overlay} alt="overlay" />
      </Col>
      <Col className="bg-primary billboard">
        <h1>
          Create happiness<br></br> from buying a gift<br></br> card today.{" "}
          <img src={curls} alt="curls" />
        </h1>
      </Col>
    </Container>
  );
}

export default Reviews;
