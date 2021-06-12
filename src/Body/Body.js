import { React, Component } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import Animatedicons from "../Animation/AnimateIcon";
import "./body.css";

class Body extends Component {

    render() {

        let buttonStyle = {
            width : "160px",
            height : "40px",
            borderRadius: "12px",
            color : "white",
            backgroundColor : "#FF7700",
            border:"none"
        }

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
                          
                            <Form.Control
                                id="inlineFormInput"
                                placeholder="Name"
                            />
                        </Col>
                        <Col xs="auto">
                            
                            <Form.Control
                                
                                id="inlineFormInput"
                                placeholder="Mobile"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Control
                                id="inlineFormInput"
                                placeholder="Email"
                            />
                        </Col> 
                        <Col xs="auto">
                        <Button type="submit" class="btn" id="sendButton">
                        {/* <img src="/msgpediapics/SendMsg.jpg"  id="sendButtonImg" alt="" /> */}
                            Free Trial
                            </Button>
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