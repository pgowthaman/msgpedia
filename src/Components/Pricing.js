import { React, Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./component.css"

class Pricing extends Component {

    render() {
        return (
            <div class="cardComponent">
            <Container >
                <h1 class="subHeader">Pricing Plans</h1>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto">
                        <Card >
                            <Card.Body>
                            <Card.Title class="cardSubtitile">BASIC</Card.Title>
                                <Card.Title class="cardTitle">&#8377; 7,500</Card.Title>
                                {/* <Card.Text>
                                    SMS Credit:50,000
                                 </Card.Text>
                                <Card.Text>
                                    Cost/SMS:0.15
                                 </Card.Text> */}
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>SMS Credit : 50,000</ListGroupItem>
                                <ListGroupItem>Cost/SMS : &#8377;0.15</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Button variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto">
                        <Card >
                            <Card.Body>
                            <Card.Title class="cardSubtitile">STANDARD</Card.Title>
                                <Card.Title class="cardTitle">&#8377; 12,000</Card.Title>
                                {/* <Card.Text>
                                    SMS Credit:50,000
                                 </Card.Text>
                                <Card.Text>
                                    Cost/SMS:0.15
                                 </Card.Text> */}
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>SMS Credit : 1,00,000</ListGroupItem>
                                <ListGroupItem>Cost/SMS : &#8377;0.12</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Button variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto">
                        <Card >
                            <Card.Body>
                            <Card.Title class="cardSubtitile">ELITE</Card.Title>
                                <Card.Title class="cardTitle">&#8377; 55,000</Card.Title>
                                {/* <Card.Text>
                                    SMS Credit:50,000
                                 </Card.Text>
                                <Card.Text>
                                    Cost/SMS:0.15
                                 </Card.Text> */}
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>SMS Credit : 5,00,000</ListGroupItem>
                                <ListGroupItem>Cost/SMS : &#8377;0.11</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Button variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto">
                        <Card >
                            <Card.Body>
                            <Card.Title class="cardSubtitile">ENTERPRISE</Card.Title>
                                <Card.Title class="cardTitle">&#8377; 1,00,000</Card.Title>
                                {/* <Card.Text>
                                    SMS Credit:50,000
                                 </Card.Text>
                                <Card.Text>
                                    Cost/SMS:0.15
                                 </Card.Text> */}
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>SMS Credit : 10,00,000</ListGroupItem>
                                <ListGroupItem>Cost/SMS : &#8377;0.10</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Button variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
export default Pricing