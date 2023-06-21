import React from "react";
import '../css/navbar.css';
import {FaRegUserCircle} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {FaRegQuestionCircle} from "react-icons/fa";
import {AiOutlineSetting} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineAppstore}  from "react-icons/ai";
import {AiOutlineFileText} from "react-icons/ai";
import {FcPlus} from "react-icons/fc";
import {BiMenu} from "react-icons/bi";
import {BiDollar} from "react-icons/bi";


const Header = () => {

    return(
       <div className="navbar">
        <nav>
            <div className="firstNavitems">
                <FcPlus className="appLogo"/>
                <a href="#" className="routes">Grave Sites Management</a>
            </div>

            <div className="hamburger">
            <BiMenu />
                {/* <button type="button" >  </button> */}
            </div>

            <div className="middleNavItems">
                <div className='dropdown nav-item'>
                    <button class="dropbtn">
                        <AiOutlineAppstore style={{fontSize : '1.5rem' ,paddingRight:"8px"}} /> 
                        <span style={{paddingRight:"8px"}} >Maintain</span>
                        <FaChevronDown style={{fontSize : '0.95rem'}}/>
                    </button>

                    <div class="dropdown-content">
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                </div> 
            
                <div  className='smallFlex'>
                    <BiDollar style={{fontSize : '1.25rem' ,paddingRight:"8px"}}/> 
                    <a href='#' className="routes"> Payments </a>
                </div>

                <div  className='smallFlex nav-item'>  
                   <AiOutlineFileText style={{paddingRight:"8px"}}/>
                   <a href='#' className="routes"> Reports </a>
                </div>

            </div>

            <div className="lastNavItems">
                <button type="button" className="navbtn"> <AiOutlineSearch/> </button>
                <button type="button" className="navbtn"> <AiOutlineSetting/> </button>
                <button type="button" className="navbtn"> <FaRegQuestionCircle/> </button>
                <div className='dropdown nav-item'>
                    <button class="dropbtn smallFlex">
                        <FaRegUserCircle style={{ fontSize : '1.25rem',paddingRight:"8px"}} />
                        <p style={{ paddingRight:"8px"}}className="userName">User name</p>
                        <FaChevronDown style={{fontSize : '0.95rem', paddingRight:"8px"}}/>
                    </button>
                    <div class="dropdown-content">
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                    </div>
                </div>        
            </div>
        
        </nav>
       </div>
    )
}

export default Header;