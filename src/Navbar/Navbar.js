import {React,Component} from "react";
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";

class NavBar extends Component {

    render(){
        return(
                <Navbar bg="white" expand="lg" sticky="top">
                    <Navbar.Brand href="#"><img src="/msgpediapics/header.png" class="navbar-img" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto" id="midNav">
                                <NavDropdown title="Communication" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action4">SMS Solutions</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Missed Call Service</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Email Champaign</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">International Bulk SMS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Voice Broadcast</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Election Champaign</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Whatsapp Champaign</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Reseller Access</NavDropdown.Item>
                                </NavDropdown> 
                                <Nav.Link href="#" >API Integration</Nav.Link>
                                <NavDropdown title="Resource" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action4">Developer API</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Use Cases</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pricing" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action4">SMS Solutions</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Voice Broadcast</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Missed Call Service</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">International Bulk SMS</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Whatsapp Champaign</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" >Learning Center</Nav.Link>
                                <Nav.Link href="#" >Contact</Nav.Link>
                            </Nav>
                        <Form className="d-flex">
                            <Button class="btn btn-primary" id = "nav-btn">Login</Button>
                        </Form>
                        <Form className="d-flex">
                            <Button variant="btn btn-dark" id="nav-btn">Sign Up</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
        )
    }


}
export default NavBar;