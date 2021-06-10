import { React, Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./component.css"

class OtpSMS extends Component {

    render() {
        return (
            <div class="component">
                <Container>
                    <h1 class="subHeader">OTP Route</h1>
                    <Row className="justify-content-center align-items-center">
                        <Col >
                            <div class="content"><p>MSGPEDIA offers One-Time Passwords (OTPs) SMS delivery services which can be further used to authenticate a user or for account verification
                            </p><p> With our powerful API, you will have numerous options for sending automated text messages. From the simple scheduling of texts to more complicated recurring SMS and Group-based messaging, our service provides both the easy and flexibility to communicate with your customers how you relate.
                            </p>
                            </div>
                        </Col>
                        <Col >
                            <img src='Contentpics/OTP.png' style={{ width: "350px" }} />
                        </Col>
                        <Col >
                            <ul class="content">
                                <li>Up to 99% Delivery ratio</li>
                                <li>DND Allowed</li>
                                <li>Instant SENDER ID</li>
                                <li>Access our platform</li>
                                <li>Free API Integration</li>
                                <li>Multi-Linguistic</li>
                                <li>Real time reports</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default OtpSMS