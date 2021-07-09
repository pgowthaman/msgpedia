import {React,Component} from 'react'
import ReactTypingEffect from 'react-typing-effect';



class TypingEffect extends Component {

render(){
    return(
        <ReactTypingEffect
        text={['Reliable', 'Secure', 'Powerful', 'Robust', 'Trusted']}
        speed = {150}
        eraseSpeed = {50}
        typingDelay = {100}
        eraseDelay = {100}
        className = "runningHeader highlighted-text"
        cursor = " "
      />
    )
}
    

}
export default TypingEffect;