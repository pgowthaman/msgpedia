import { React, Component, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";


const SpecialFeatures = () => {

    useEffect(() => {
        Aos.init({});
    }, []);

    let subheaderStyle = {
        paddingTop: '30px',
    }

    let cardStyle = {
        boxShadow:"none",
        border : "none",
        width: "300px",
        borderRadius: "20px",
        fontFamily: "Ubuntu",
        paddingBottom: "20px",
        marginBottom: "20px",
        marginRight: "20px"
    }

    let cardTitleStyle = {
        fontSize: "25px",
        paddingBottom: "10px"
    }

    let cardtextStyle = {
        fontSize: "15px"
    }

    let imgStyle = {
        width : "70px",
        paddingBottom:"10px"
    }
    return (
        <div>
            <Container >
                <h1 class="subHeader" data-aos="fade" >Special Features</h1>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/serverUp.png" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>100% Uptime Server</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Built – in cloud hosting server with continuous updating. Auto scales with near zero downtime at any situation.  </ListGroupItem>
                                </ListGroup>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/personalised.png" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>Personalised SMS</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Personal touch with your clients by addressing their first name, Last Name and Mobile Number of each message.</ListGroupItem>
                                </ListGroup>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/FastMessage.jpg" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>Fast Messages</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Instant delivery up to 2-5 sec. Also track the delivery of your individual and group messaging report with live status, according to TRAI guidelines</ListGroupItem>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/payUp.png" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>Pay As You Go</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Clear, Honest Competitive pricing with zero hidden charges. NO SETUP Fee Involved, buy SMS Credits and access our application & APIs is free forever.</ListGroupItem>
                                </ListGroup>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/serverUp.png" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>100% Uptime Server</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Built – in cloud hosting server with continuous updating. Auto scales with near zero downtime at any situation.  </ListGroupItem>
                                </ListGroup>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" data-aos="flip-left">
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/serverUp.png" style={imgStyle} alt="" /></Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}>100% Uptime Server</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={cardtextStyle}>Built – in cloud hosting server with continuous updating. Auto scales with near zero downtime at any situation.  </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default SpecialFeatures;