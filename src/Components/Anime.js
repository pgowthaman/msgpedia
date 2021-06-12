import React, { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos"
import "aos/dist/aos.css"

const Anime = () => {

     useEffect ( () =>{
            Aos.init({});
    },[]);

    return (
        <div data-aos="fade-up">
           
                <h1>animateIn</h1>
           
        </div>
    )
  }

export default Anime;