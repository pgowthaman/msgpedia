import { React, Component } from "react";
import NavBar from "../Navbar/Navbar";
import SideBar from "../Navbar/SideBar";
import "./header.css"


class Header extends Component {

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

        let displayType = "none";
        let sideNavBar = "";
        if ( this.state.windowWidth  < 510) {
          
            displayType = "mobile"
        } else if(this.state.windowWidth  < 1000) {
            displayType = "smallWindow"
            sideNavBar = <SideBar /> 
        }else{
            displayType = "largeWindow"
            sideNavBar = <SideBar /> 
        }

        return (
            <>
                <p class="headerTop"><a href="#link">DLT Update: Operators are live with template scrubbing and messages that do not match templates already approved in DLT will be blocked. Know more.</a> (Scrolling)</p>
                {sideNavBar}
                 <NavBar displayType = {displayType}/> 
              
            </>
        )
    }

}

export default Header;