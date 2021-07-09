import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ['Reliable', 'Secure', 'Powerful', 'Robust', 'Trusted'];

const RunningBody = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 class="runningHeader highlighted-text">
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.gentle } direction="down"
      />
    </h1>
  );
};



// import { React, Component, useEffect } from "react";
// import Aos from "aos"
// import "aos/dist/aos.css"

// const textArray = ['Reliable', 'Secure', 'Powerful', 'Robust', 'Trusted'];

// class RunningBody extends Component {

//       constructor() {
//         super();
//         this.state = { textIdx: 0 };
//       }

//     componentDidMount() {
//         Aos.init({
//             duration : 1000,
//           });
        
//         this.timeout = setInterval(() => {
//             let currentIdx = this.state.textIdx;
//             this.setState({ textIdx: currentIdx + 1 });
           
//           }, 2000);
          
//       }

//       componentDidUnmount() {
//         clearInterval(this.timeout);
//       }

//     render(){

//         let textThatChanges = textArray[this.state.textIdx % textArray.length];
//         return (
//             <>
//             <h1 class="messageHeader toplayer"  data-aos="zoom-in-right">{textThatChanges}</h1>
//             </>
//         )
//     }

// }

export default RunningBody;