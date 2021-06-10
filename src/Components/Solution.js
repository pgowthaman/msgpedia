import { React, Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import "./component.css"
import TransactionSMS from "./TransactionSMS";
import PromotionalSMS from "./PromotionalSMS";
import OtpSMS from "./OtpSMS";

class Solutions extends Component {

    render() {
        return (
            <div class="component">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col >
                        <h1 class="subHeader">Our Products</h1>
                             <img src='Contentpics/Solutions.png' style={{ width: "360px" }} />
                        </Col>
                        <Col >
                    <ul class="content">
                        <li>Transaction SMS</li>
                        <li>Promotional SMS</li>
                        <li>OTP Route</li>
                        <li>API Integration</li>
                        <li>WhatsApp Campaign</li>
                        <li>E-Mail Marketing</li>
                        <li>IVR Call</li>
                    </ul>
               </Col>
                    </Row>
                <Row className="justify-content-center align-items-center">
                    <Col>
                        <div class="solutionsTab">
                        <Tabs defaultActiveKey="transaction" id="solutions-Tab" >
                            <Tab eventKey="transaction" title="Transaction SMS">
                                <TransactionSMS/>
                            </Tab>
                            <Tab eventKey="promotional" title="Promotional SMS">
                                <PromotionalSMS />
                            </Tab>
                            <Tab eventKey="otp" title="OTP Route">
                                <OtpSMS />
                            </Tab>
                            <Tab eventKey="api" title="API Integration" disabled>
                                API Integration
                             </Tab>
                             <Tab eventKey="api" title="WhatsApp Campaign" disabled>
                             WhatsApp Campaign
                             </Tab>
                             <Tab eventKey="api" title="E-Mail Marketing" disabled>
                             E-Mail Marketing
                             </Tab>
                             <Tab eventKey="api" title="IVR Call" disabled>
                             IVR Call
                             </Tab>
                        </Tabs>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }

}

export default Solutions