import { React, Component } from "react";
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import Body from "../Body/Body.js"
import CompanyCarousel from "../Carousel/CompanyCarousel";
import About from "../About/About";
import { Link, Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import Solutions from "../Components/Solution";
import TransactionSMS from "../Components/TransactionSMS";
import Pricing from "../Components/Pricing";

class NavBar extends Component {

    render() {
        return (<>
            <Navbar bg="white" expand="lg" sticky="top">
                <Navbar.Brand href="#"><img src="/msgpediapics/header.png" class="navbar-img" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto" id="midNav">
                        <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={-50} duration={500} >
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
                        <Nav.Link href="#" >API Integration</Nav.Link>
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
                        <Button class="btn btn-primary" id="nav-btn">Login</Button>
                    </Form>
                    <Form className="d-flex">
                        <Button variant="btn btn-dark" id="nav-btn">Sign Up</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Body />
            <CompanyCarousel />
            <Element name="about" className="element">
                <About />
            </Element>
            <Element name="solutions" className="element">
               <Solutions />
            </Element>
            <Element name="pricing" className="element">
               <Pricing />
            </Element>
        </>
        )
    }
}
export default NavBar;