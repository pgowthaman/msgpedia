import { React, Component } from "react";
import AnimatedNumber from "animated-number-react";
//import AnimatedNumber from "react-animated-numbers"

import ScrollTrigger from 'react-scroll-trigger'
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import NumberFormat from 'react-number-format';

class WeHave extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            customerValue: 0 ,
            senderId : 0,
            messageSent:0,
            messageReceived:0

        };
        this.onEnterViewport = this.onEnterViewport.bind(this);
        this.onExitViewport = this.onExitViewport.bind(this);
    }

    formatValue = (value) => {
        var finalVal = Number(value).toFixed(0).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
        return (`${finalVal}`)
    };

    onEnterViewport() {
       
        this.setState({
            customerValue: 10000 ,
            senderId : 32508,
            messageSent:275162389,
            messageReceived:268422853
          });
       
      }
     
      onExitViewport() {
        this.setState({
            customerValue: 0 ,
            senderId : 0,
            messageSent:0,
            messageReceived:0
          });
      }

    render() {
    
        let subheaderStyle = {
            paddingTop: '30px',
        }
    
        let cardStyle = {
            boxShadow:"none",
            border : "none",
            width: "230px",
            borderRadius: "20px",
            fontFamily: "Ubuntu",
            paddingBottom: "20px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign : "center"
        }
    
        let cardTitleStyle = {
            fontSize: "30px",
            paddingBottom: "10px"
        }
    
        let cardSubtitleStyle = {
            fontSize: "20px"
        }
    
        let imgStyle = {
            width : "70px",
            paddingBottom:"10px"
        }

        const element = <NumberFormat value={this.state.customerValue} displayType={'text'} thousandSeparator={true} />

        return (
            <div > 
                 <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
                <Container >
                <h1 class="subHeader" style={subheaderStyle} >What we do</h1>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto" >
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/Happycustomers.png" style={imgStyle} alt="" /></Card.Title>
                            <Card.Title class="cardSubtitle" style={cardSubtitleStyle}>Happy Customers</Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}> 
                                
                                 <AnimatedNumber value={this.state.customerValue} formatValue={this.formatValue} duration="1000"/>+ 
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" >
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/SenderID.png" style={imgStyle} alt="" /></Card.Title>
                            <Card.Title class="cardSubtitle" style={cardSubtitleStyle}>Sender ID</Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}><AnimatedNumber value={this.state.senderId} formatValue={this.formatValue} duration="1000" />K</Card.Title>
                               
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" >
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/MessageSent.png" style={imgStyle} alt="" /></Card.Title>
                            <Card.Title class="cardSubtitle" style={cardSubtitleStyle}>Messages Sent</Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}><AnimatedNumber value={this.state.messageSent} formatValue={this.formatValue} duration="1000" /></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs="auto" >
                        <Card style={cardStyle}>
                            <Card.Body>
                            <Card.Title class="cardTitle"> <img src="Contentpics/MessageDelivered.png" style={imgStyle} alt="" /></Card.Title>
                            <Card.Title class="cardSubtitle" style={cardSubtitleStyle}>Messages Delivered</Card.Title>
                                <Card.Title class="cardTitle" style={cardTitleStyle}><AnimatedNumber value={this.state.messageReceived} formatValue={this.formatValue} duration="1000" /></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>




                </ScrollTrigger>
            </div>
        )
    }
}

export default WeHave;