import { React, Component } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import Body from "../Body/Body.js"
import CompanyCarousel from "../Carousel/CompanyCarousel";
import { Link, Element } from "react-scroll";
import ChooseUs from "../Components/ChooseUs";
import SpecialFeatures from "../Components/SpecialFeatures";
import WeHave from "../Components/WeHave";
import FreeCredits from "../Components/FreeCredits";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons'
import Solutions from "../Components/Solution";
import Pricing from "../Components/Pricing";



class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
        
        
            <Navbar bg="white" expand="lg" sticky="top">
                
                <Navbar.Brand href="#"><img src="/msgpediapics/header.png" class="navbar-img" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto" id="midNav">
                        <Link activeClass="active" to="specialFeatures" spy={true} smooth={true} offset={-50} duration={500} >
                            <NavDropdown title="Solutions" id="navbarScrollingDropdown" renderMenuOnMount={true} >
                                <NavDropdown.Item href="#action4">SMS Solutions</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Missed Call Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Email Champaign</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">International Bulk SMS</NavDropdown.Item>
                                <NavDropdown.Item href="#action8">Voice Broadcast</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Election Champaign</NavDropdown.Item>
                                <NavDropdown.Item href="#action10">Whatsapp Champaign</NavDropdown.Item>
                                <NavDropdown.Item href="#action11">Reseller Access</NavDropdown.Item>
                            </NavDropdown>
                        </Link>
                        <Link activeClass="active" to="chooseUs" spy={true} smooth={true} offset={-50} duration={500} >
                        <Nav.Link href="#" >API Integration</Nav.Link>
                        </Link>
                        <NavDropdown title="Resource" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                            <NavDropdown.Item href="#action12">Developer API</NavDropdown.Item>
                            <NavDropdown.Item href="#action13">Use Cases</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pricing" id="navbarScrollingDropdown" renderMenuOnMount={true}>
                            <NavDropdown.Item href="#action14">SMS Solutions</NavDropdown.Item>
                            <NavDropdown.Item href="#action15">Voice Broadcast</NavDropdown.Item>
                            <NavDropdown.Item href="#action16">Missed Call Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action17">International Bulk SMS</NavDropdown.Item>
                            <NavDropdown.Item href="#action18">Whatsapp Champaign</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" >Learning Center</Nav.Link>
                        <Nav.Link href="#" >
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button class="btn btn-primary" id="nav-btn"><FontAwesomeIcon icon={faUser} /> Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br />
            <Element name="home" className="element">
            <Body displayType = {this.props.displayType}/>
            </Element>
            <Element name="chooseUs" className="element">
            <CompanyCarousel />
            <ChooseUs displayType = {this.props.displayType}/>
            <FreeCredits />
            <br />
            </Element>
            <Element name="specialFeatures" className="element">
            <SpecialFeatures/>
            </Element>
            <Element name="weDo" className="element">
            <WeHave />
            </Element>
        </>
        )
    }
}
export default NavBar;