import { React, Component } from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStar,faEnvelope ,faComments} from '@fortawesome/free-regular-svg-icons'
// import Wave from "./Wave";


class Footer extends Component {
    render() {

        return (
            <div>
                {/* <img src='Footerpics/1.png' style={{ width: "5%" }} />
                <img src='Footerpics/2.png' style={{ width: "5%" }} />
                <img src='Footerpics/3.png' style={{ width: "5%" }} />
                <img src='Footerpics/4.png' style={{ width: "5%" }} />
                <img src='Footerpics/5.png' style={{ width: "5%" }} />
                <img src='Footerpics/7.png' style={{ width: "5%" }} />
                <img src='Footerpics/8.png' style={{ width: "5%" }} />
                <img src='Footerpics/9.png' style={{ width: "5%" }} />
                <img src='Footerpics/10.png' style={{ width: "5%" }} />
                <img src='Footerpics/11.png' style={{ width: "5%" }} />
                <img src='Footerpics/12.png' style={{ width: "5%" }} />
                <img src='Footerpics/13.png' style={{ width: "5%" }} />
                <img src='Footerpics/14.png' style={{ width: "5%" }} />
                <img src='Footerpics/15.png' style={{ width: "5%" }} />
                <img src='Footerpics/16.png' style={{ width: "5%" }} />
                <img src='Footerpics/17.png' style={{ width: "5%" }} />
                <img src='Footerpics/18.png' style={{ width: "5%" }} />
                <img src='Footerpics/19.png' style={{ width: "5%" }} />
                <img src='Footerpics/20.png' style={{ width: "5%" }} /> */}
                {/* <Wave /> */}
                <footer>
                    <div class="container" id="footer">
                        <div class="row">
                            <div class="col-md-4 footer-column">
                                <ul class="nav flex-column">
                                    <li class="nav-item" id="footer-link">
                                        <a class="nav-link" href="#" id="footer-link">Product </a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link" href="#" id="footer-link">Product 1</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Product 2</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Plans & Prices</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Frequently asked questions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Terms of Use</a>
                                    </li>
                                    <li class="nav-item" id="footer-link">
                                        <a class="nav-link" href="#" id="footer-link"> <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                                        </span> </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-md-4 footer-column">
                                <ul class="nav flex-column">
                                    <li class="nav-item" id="footer-link">
                                        <a class="nav-link" href="#" id="footer-link">Company </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">About us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Job postings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">News and articles</a>
                                    </li>
                                    <li class="nav-item">
                                        <div class="col-md-4 box">
                                            <ul class="list-inline social-buttons">
                                                <li class="list-inline-item">
                                                    <a href="#" >
                                                        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4 footer-column">
                                <ul class="nav flex-column">
                                    <li class="nav-item" id="footer-link">
                                        <a class="nav-link" href="#" id="footer-link">Contact & Support </a>
                                    </li>
                                    <li class="nav-item" id="footer-link">
                                        <span class="nav-link"><a href="Tel:+918110809809" id="footer-link"><FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon> +91 8110 - 809 - 809</a></span>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link"><FontAwesomeIcon icon={faComments}></FontAwesomeIcon> Live chat</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Contact us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="Mailto:info@msgpedia.com" id="footer-link"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> info@msgpedia.com</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link"> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Give feedback</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" id="footer-link">Privacy Policy</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>

                        {/* <div class="row ">
                        <div class="footer-column">
                        <ul class="nav flex-column">
                                <li class="nav-item" id="footer-link">
                                <a class="nav-link" href="#" id="footer-link"> <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                            </span> </a>
                            </li>
                            </ul>
                           
                        </div>
                        <div class="col-md-4 box">
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="#" >
                                    <FontAwesomeIcon icon ={faFacebook}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                    <FontAwesomeIcon icon ={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                    <FontAwesomeIcon icon ={faLinkedin}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                    <FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 box">
                            <ul class="list-inline quick-links">
                                <li class="list-inline-item">
                                    <a href="#" id="footer-link">Privacy Policy</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" id="footer-link">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;