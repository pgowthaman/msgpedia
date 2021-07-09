import { React, Component } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone,faArrowRight} from '@fortawesome/free-solid-svg-icons'

class FreeCredits extends Component {

    componentDidMount() {
        Aos.init({
            duration: 1000,
        });
    }

    render() {


        let cardStyle = {
            boxShadow: "none",
            border: "none",
            width: "1000px",
            borderRadius: "20px",
            fontFamily: "poppins",
            marginRight: "20px",
            textAlign: "center",
            backgroundColor : "#f50040",
            color : "white",
            paddingBottom : "0",
            marginBottom : "0"
        }

        let cardtextStyle = {
            fontSize: "15px",
            textAlign: "justify"
        }

        let buttonStyle = {
            width: "220px",
            float: "left",
            color : "white",
            fontWeight : "900",
            borderColor : "white",
            border : "3px Solid",
            fontSize : "20px"
        }

        let arrowStyle = {
            float: "left",
            marginLeft : "20px",
            paddingTop : "10px"
        }

        let subheaderStyle = {
            float: "right",
            paddingTop : "10px"
        }
        return (
            <>


                    <Container >
                        <Row className="justify-content-center align-items-center" data-aos="flip-down">
                            <Card style={cardStyle}>
                                <Col xs="auto" >
                                    <Card.Body>
                                        <Card.Text style={cardtextStyle}>
                                            <Button style={buttonStyle}><FontAwesomeIcon icon={faEnvelope} /> 100 Free Credits</Button>
                                            <h1 class="subHeader" style = {arrowStyle}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h1>
                                            <h1 class="subHeader" style={subheaderStyle}>Dial us at  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>  +91 8110 809 809</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Card>

                        </Row>
                    </Container>
            </>
        )
    }
}

export default FreeCredits;