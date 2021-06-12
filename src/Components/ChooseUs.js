import { React, Component, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./component.css"
import Aos from "aos"
import "aos/dist/aos.css"


const ChooseUs = () => {

    useEffect ( () =>{
           Aos.init({});
   },[]);

        let subheaderStyle = {
            paddingTop: '30px',
        }

        let cardStyle = {
            width: "300px",
            borderRadius: "20px",
            fontFamily: "Ubuntu",
            paddingBottom: "20px",
            marginBottom: "20px",
            borderColor: "#FF7700",
            marginRight: "20px"
        }

        let cardTitleStyle = {
            fontSize: "25px",
            paddingBottom: "10px"
        }

        let cardtextStyle = {
            fontSize: "15px"
        }

        return (
            <>
            <div class="cardComponent">
                
                <Container >
                    <h1 class="subHeader" style={subheaderStyle} data-aos="fade" >Why <span class="highlighted-text">Choose</span> Us?</h1>
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto" data-aos="slide-right">
                                <Card style={cardStyle}>
                                    <Card.Body>
                                        <Card.Title class="cardTitle" style={cardTitleStyle}>Local & Global</Card.Title>
                                        {/* <Card.Title class="cardSubtitile">BASIC</Card.Title> */}
                                        <Card.Text style={cardtextStyle}>
                                            Best way to send and receive Instant messages, Reliable Communications for your Domestic & Overseas clients and customers.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col xs="auto" data-aos="fade-up">
                            <Card style={cardStyle}>
                                <Card.Body>
                                    <Card.Title class="cardTitle" style={cardTitleStyle}>Corporate & Enterprise Solutions</Card.Title>
                                    {/* <Card.Title class="cardSubtitile">BASIC</Card.Title> */}
                                    <Card.Text style={cardtextStyle}>
                                        We empower start-ups, small to medium businesses and global enterprises to connect, interact and transact across India and Globally.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="auto" data-aos="slide-left">
                            <Card style={cardStyle}>
                                <Card.Body>
                                    <Card.Title class="cardTitle" style={cardTitleStyle}>Wholesale & Retail</Card.Title>
                                    {/* <Card.Title class="cardSubtitile">BASIC</Card.Title> */}
                                    <Card.Text style={cardtextStyle}>
                                        Wholesale and Retail communication across the globe with highly competitive pricing and multiple direct routes to deliver on time.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
export default ChooseUs;