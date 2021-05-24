import React, { Component } from "react";
import CarouselFadeMob from "./CarouselFadeMob.js";
import CarouselFadeSmall from "./CarouselFadeSmall.js";
import "./CarouselFade.css"
import CarouselFade from "./CarouselFade.js";

class CompanyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        const { windowWidth } = this.state;
        let mobDisplay = "none";
        let windowSmall = "none";
        let windowLarge = "none";
        if ( this.state.windowWidth  < 510) {
            mobDisplay = "block";
            windowSmall = "none";
            windowLarge = "none";
        } else if(this.state.windowWidth  < 1000) {
            mobDisplay = "none";
            windowSmall = "block";
            windowLarge = "none";
        }else{
            mobDisplay = "none";
            windowSmall = "none";
            windowLarge = "block";
        }

        return (<div>
            <div class="messageHeader carousalTop">Trusted by <span class="highlighted-text">10,000+</span> businesses</div>
            <CarouselFadeSmall display ={windowSmall}/>
            <CarouselFadeMob display ={mobDisplay}/>
            <CarouselFade display ={windowLarge}/>
        </div>)
    }
}

export default CompanyCarousel;