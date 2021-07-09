//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./sideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft,faHome ,faSmileWink,faSurprise,faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import { Link, Element } from "react-scroll";


const SideBar = () => {

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={false}>
        
          <SidebarContent>
            
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-200} duration={500} >
            <Menu iconShape="square">
              <MenuItem  icon={<FontAwesomeIcon icon={faHome} />}>Home</MenuItem>
              </Menu>
              </Link> 
               
            <Link to="chooseUs" spy={true} smooth={true} offset={-100} duration={500} >
            <Menu iconShape="square">
              <MenuItem icon={<FontAwesomeIcon icon={faSmileWink} />}></MenuItem>
              </Menu>
              </Link> 
               
             <Link activeClass="active" to="specialFeatures" spy={true} offset={-100} smooth={true}  duration={500} > 
            <Menu iconShape="square">
              <MenuItem icon={<FontAwesomeIcon icon={faSurprise} />}></MenuItem>
              </Menu>
              </Link> 
               
             <Link activeClass="active" to="weDo" spy={true} smooth={true} offset={-50} duration={500} > 
            <Menu iconShape="square">
              <MenuItem icon={<FontAwesomeIcon icon={faClipboardCheck} />}></MenuItem>
            </Menu>
               </Link>  
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
