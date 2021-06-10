import { React, Component } from "react";
import "./footer.css"

class Footer extends Component {
    render() {

        return (
            <div>
               <img src='Footerpics/1.png' style={{ width: "5%" }} />
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
               <img src='Footerpics/20.png' style={{ width: "5%" }} />
            <footer>
                <div class="container" id="footer">
                    <div class="row">
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item" id="footer-link">
                                    <span class="footer-title">Product</span>
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
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item" id="footer-link">
                                    <span class="footer-title">Company</span>
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
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item" id="footer-link">
                                    <span class="footer-title">Contact & Support</span>
                                </li>
                                <li class="nav-item" id="footer-link">
                                    <span class="nav-link"><a href="Tel:+918110809809" id="footer-link"><i class="fas fa-phone-square"></i>+91 8110 - 809 - 809</a></span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="footer-link"><i class="fas fa-comments"></i>Live chat</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="footer-link"><i class="fas fa-envelope"></i>Contact us</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="Mailto:info@msgpedia.com" id="footer-link"><i class="fas fa-envelope"></i>info@msgpedia.com</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a class="nav-link" href="#" id="footer-link"><i class="fas fa-star"></i>Give feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>

                    <div class="row text-center">
                        <div class="col-md-4 box">
                            <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                            </span>
                        </div>
                        <div class="col-md-4 box">
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="#" >
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
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
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;