import { React, Component } from "react";
import Carousel from 'fade-carousel';
import "./CarouselFade.css"
import { Col, Container, Row } from "react-bootstrap";

class CarouselFade extends Component {

    render() {
        const divStyle = {
            height: "75px",
            width: "100%",
        }
        let style = {
            display:this.props.display
        }

        return (
            <div class="carouselfade" style={style}>
                <Container>
                    <Row>
                        <Col>
                            <Carousel divStyle={divStyle} delay={5000} mode={"fade"}>
                                <img src='clientlogos/Agam.png' class="caroselimg" alt="asdada" style={{ width: "100px", height: "85px" }} />
                                <img src='clientlogos/JNTextiles.png' class="caroselimg" style={{ width: "100px", height: "85px" }} alt="asdada" />
                                <img src='clientlogos/SunEdison.png' class="caroselimg" style={{ width: "150px", height: "70px", paddingTop: "15px" }} alt="asdada" />
                                <img src='clientlogos/VReap.png' class="caroselimg" style={{ width: "100px", height: "85px" }} alt="asdada" />

                            </Carousel>
                        </Col>
                        <Col>
                            <Carousel delay={5000} mode={"fade"}>
                                <img src='clientlogos/SunEdison.png' style={{ width: "150px", height: "70px", paddingTop: "15px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/Toyota.png' style={{ width: "100px", height: "85px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/Agam.png' style={{ width: "100px", height: "85px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/JNTextiles.png' style={{ width: "100px", height: "85px" }} class="caroselimg" alt="asdada" />

                            </Carousel>
                        </Col>
                        <Col>
                            <Carousel delay={5000} mode={"fade"}>
                                <img src='clientlogos/AnnaiJewellers.png' style={{ width: "150px", height: "85px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/KalisInfotech.png' style={{ width: "150px", height: "70px", paddingTop: "15px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/Bubbaweb.png' style={{ width: "150px", height: "70px", paddingTop: "15px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/TeddySMS.png' style={{ width: "170px", height: "60px", paddingTop: "25px" }} class="caroselimg" alt="asdada" />

                            </Carousel>
                        </Col>
                        <Col>
                            <Carousel delay={5000} mode={"fade"}>
                                <img src='clientlogos/foodpub.png' style={{ width: "150px", height: "70px", paddingTop: "15px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/Groot1.png' style={{ width: "150px", height: "70px", paddingTop: "15px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/GoWithUs.png' style={{ width: "150px", height: "75px", paddingTop: "10px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/SreeAnnai.png' style={{ width: "200px", height: "60px", paddingTop: "12.5px" }} class="caroselimg" alt="asdada" />

                            </Carousel>
                        </Col>
                        <Col>
                            <Carousel delay={5000} mode={"fade"}>
                                <img src='clientlogos/KongunadHospitals.png' style={{ width: "100px", height: "85px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/KRJewels.png' style={{ width: "100px", height: "85px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/MillerSuperMarket.png' style={{ width: "170px", height: "60px", paddingTop: "12.5px" }} class="caroselimg" alt="asdada" />
                                <img src='clientlogos/neuralschemait.png' style={{ width: "150px", height: "60px", paddingTop: "12.5px" }} class="caroselimg" alt="asdada" />

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default CarouselFade;