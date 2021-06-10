import { React, Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Col, Container, Form } from "react-bootstrap";
import "./about.css"


class About extends Component {

    render() {
        return (
            <div class ="about"> 
            
            <Container>
          
                <h1 class="subHeader">Why Choose US?</h1>
               
                
                <ul>
               
                <li><span class = "highlited-Orange">MSG</span><span class = "highlited-black">PEDIA</span> is the most Comprehensive, User-Friendly, and Innovative
                    Enterprises Messaging Solution provider in India.</li>
                  
                <li>
                    We support companies to optimize their promotional activities through an
                    Intelligent Communication platform.
                </li>
              
                <li>
                    Also, We provide wholesale SMS across the globe with several services in <span class="highlighted-text">Highly Competitive Pricing</span> and <span class="highlighted-text">Dynamic Quality Multiple Direct Routes</span> to
                    deliver each and every message on time.
                </li>
               
                <li>
                    We provide disparate messaging solutions with the prime focus on cost-effectiveness to engage your customers globally, which is evidently profitable.
                </li>
              
            </ul>
           
            </Container>
            </div>
        )
    }

}

export default About