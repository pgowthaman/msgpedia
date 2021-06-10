import { React, Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./component.css"

class PromotionalSMS extends Component {

render(){
    return(
    <div class= "component">
        <Container>
        
        <h1 class="subHeader">Promotional SMS</h1>
       
           <Row className="justify-content-center align-items-center">
               <Col >
             
               <div class="content">With our SMS Web Application, you will have numerous options for sending automated text messages. From the simple scheduling of texts to more complicated recurring SMS and Group-based messaging, our service provides both the easy and flexibility to communicate with your customers how you relate.
               </div>
                
               </Col>
               <Col >
              
                 <img src='Contentpics/Promotional.png' style={{ width: "350px" }} />
                
               </Col>
               <Col >
                    <ul class="content">
                   
                        <li>Up to 95% Delivery ratio</li>
                      
                        
                        <li>DND Allowed</li>
                       
                        
                        <li>9:00 am – 09:00 pm Delivery</li>
                        
                       
                        <li>Queuing Method</li>
                       
                        
                        <li>Multi-tenancy</li>
                       
                       
                        <li>Multi-Linguistic (UNICODE)</li>
                       
                        
                        <li>Real time reports</li>
                       
                    </ul>
               </Col>
           </Row>

        </Container>

    </div>
    )
}

} 

export default PromotionalSMS