import { React, Component } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import Animatedicons from "../Animation/AnimateIcon";
import "./body.css";

class Body extends Component {

    render() {
        return (
            <>
             <div class="mainbody">
             <Animatedicons />
                <h1 class="messageHeader toplayer">India’s most <span class="highlighted-text">Trusted &amp; Powerful</span></h1>
                <h1 class="messageHeader">Communication Platform for all your plans</h1>
                <p class="message">Reliable, Secure and Powerful Robust SMS, Voice Authentication, etc.</p>
                <Container>
                <Form >
                    <Form.Row  className="justify-content-center align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Name
                             </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Name"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Mobile
                             </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Mobile"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Email
                             </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Email"
                            />
                        </Col>
                        <Col xs="auto">
                        <button type="submit" class = "sendbutton"><img src="/msgpediapics/sendmail.png" alt="" class="sendimg"/></button>
                        </Col>
                    </Form.Row>
                </Form>
                </Container>
                </div>
               
            </>
        )
    }

}

export default Body;