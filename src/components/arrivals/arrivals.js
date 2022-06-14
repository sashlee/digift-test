import { Col, Card, Button, Row, Container, Form } from "react-bootstrap";
import filters from "../../images/filters.svg";
import giftCard from "../../images/gift-card.svg";
import noticeIcon from "../../images/notice-icon.svg";
import arrowWhite from "../../images/arrow-white.svg";
import "./arrivals.css";

function Arrivals() {
  return (
    <Container>
      <Col className="arrivals-section-title">
        <h1>Latest Arrivals</h1>
      </Col>
      <Col className="d-flex arrivals-section">
        <Col lg={1} className="filter-section">
          <Col className="d-flex filter-titles">
            <h5>Filters</h5>
            <Button className="filter-button" variant="link">
              Reset
            </Button>
          </Col>
          <div className="filter-categories">
            <h5>Categories</h5>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Ecommerce"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Popular"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Airtime & Electricity"
                className="checkbox"
              />
              <Form.Check type="checkbox" label="Gaming" className="checkbox" />
              <Form.Check
                type="checkbox"
                label="Electronics"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Clothes and Fashion"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Jewelry & Watches"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Home and furnitures"
                className="checkbox"
              />
              <Form.Check
                type="checkbox"
                label="Sports & Entertainment"
                className="checkbox"
              />
            </Form.Group>
          </Form>
        </Col>

        <Col className="categories">
          <Col>
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Col>
        <Col className="categories">
          <Col>
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Col>
        <Col className="categories">
          <Col>
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Text className="giftcard">Giftcard</Card.Text>
                <Col className="d-flex mb-2">
                  <Card.Img variant="left" width={30} src={giftCard}></Card.Img>
                  <Card.Title className="giftcard-title">
                    Amazon Gift Card
                  </Card.Title>
                </Col>

                <Card.Text className="giftcard-text">
                  Amazon Gift Card is a global fashion destination for
                  20-somethings, selling all the freshest styles complemented by
                  exclusive content....
                </Card.Text>
                <div className="divider"></div>
                <Col className="d-flex mb-2 ">
                  <Card.Img variant="left" src={noticeIcon}></Card.Img>
                  <Card.Text className="notice">
                    This card has a fee of $ 0.99
                  </Card.Text>
                </Col>
                <Col className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="purchase-card"
                  >
                    Purchase card
                    <img
                      src={arrowWhite}
                      //   width={35}
                      //   height={35}
                      className=" chevron-arrow  "
                      alt="arrow-white"
                    />
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Col>
    </Container>
  );
}

export default Arrivals;
