import { React, Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Animatedicons from "../Animation/AnimateIcon";
import "./body.css";
import RunningBody from "./RunningBody";
import TypingEffect from "./TypingEffect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const textArray = ['Reliable', 'Secure', 'Powerful', 'Robust', 'Trusted'];

class Body extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let buttonStyle = {
            width: "160px",
            height: "40px",
            borderRadius: "12px",
            color: "white",
            backgroundColor: "#FF7700",
            border: "none"
        }

        let landingImageStyle = {
            width: "700px",
            height: "100%",
        }

        if("mobile"==this.props.displayType || "smallWindow"==this.props.displayType){
            landingImageStyle = {
               display : "none"
            }
        }
        let mainBodyContent = {
            width: "310px",
            height: "100%",
            marginLeft: "20%",
            lineHeight: "0.9",
            top : "-40"
        }

        let colStyle = {
            top : "-50px"
        }
    

        return (
            <>
                <div class="mainbody">
                    <Animatedicons />
                    <Row className="justify-content-center align-items-center landing" >
                  
                        <Col style={colStyle}>
                            <div class="mainBodyContent" style={mainBodyContent}>
                                <h1 class="messageHeader toplayer">_</h1>
                                <h1 class="message toplayer">India's #1</h1>
                                <TypingEffect />
                                <br />
                                <br />
                                <p class="message toplayer">Communication</p>
                                <p class="message toplayer">Platform for all you Plans</p>
                                <Button type="button" class="btn" id="sendButton"><FontAwesomeIcon icon={faEnvelope} />  Free Trial</Button>
                                 
                            </div>
                        </Col>
                        <Col xs="auto">
                            <img src="/msgpediapics/landingpage.png" class="rounded float-right" alt="" style={landingImageStyle} />
                        </Col>
                    </Row>

                    {/* <h1 class="messageHeader toplayer">India’s most <span class="highlighted-text">Trusted &amp; Powerful</span></h1>
                <h1 class="messageHeader">Communication Platform for all your plans</h1>
                <p class="message">Reliable, Secure and Powerful Robust SMS, Voice Authentication, etc.</p>
               
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
                        
                            Free Trial
                            </Button>
                        </Col>
                    </Form.Row>
                </Form> */}
                </div>

            </>
        )
    }

}

export default Body;