import { React, Component, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./component.css"
import Aos from "aos"
import "aos/dist/aos.css"


class ChooseUs extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Aos.init({
            duration: 1000,
        });
    }

   render(){
           

        let subheaderStyle = {
            paddingTop: '30px',
        }

        let cardStyle = {
            width: "300px",
            borderRadius: "20px",
            fontFamily: "Ubuntu",
            paddingBottom: "20px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign : "center"
        }

        let cardTitleStyle = {
            fontSize: "22px",
            paddingBottom: "10px"
        }

        let cardtextStyle = {
            fontSize: "15px",
            textAlign : "justify"
        }

        let dataAos;

        if("mobile"==this.props.displayType || "smallWindow"==this.props.displayType){
            dataAos = "fade"
        }

        return (
            <>
            <div class="cardComponent">
                
                <Container >
                    <h1 class="subHeader" style={subheaderStyle} data-aos="fade" >Why <span class="highlighted-text">Choose</span> Us?</h1>
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto" data-aos={dataAos ? 'fade' : 'fade-right'}>
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
                        <Col xs="auto" data-aos="fade">
                            <Card style={cardStyle}>
                                <Card.Body>
                                    <Card.Title class="cardTitle" style={cardTitleStyle}>Corporate & Enterprise</Card.Title>
                                    {/* <Card.Title class="cardSubtitile">BASIC</Card.Title> */}
                                    <Card.Text style={cardtextStyle}>
                                        We empower start-ups, small to medium businesses and global enterprises to connect, interact and transact across India and Globally.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="auto" data-aos={dataAos ? 'fade' : 'fade-left'}>
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
}
export default ChooseUs;