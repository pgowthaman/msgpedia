import { React, Component } from "react";
import NavBar from "../Navbar/Navbar";
import "./header.css"

class Header extends Component {

    render() {
        return (
            <>
                <p class="headerTop"><a href="#link">DLT Update: Operators are live with template scrubbing and messages that do not match templates already approved in DLT will be blocked. Know more.</a> (Scrolling)</p>
                <NavBar />
            </>
        )
    }

}

export default Header;