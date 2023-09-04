import React from 'react';
// import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import './index.css'
import { useState } from 'react';
const Header =()=>{
    const [isClick,setIsClick]=useState(false)
    const valueClick= isClick ? "open": "close"
    const onClickBtn=()=>{
        setIsClick(!isClick)
    }
    return(
    <nav className="Header-con">
        <ul className="ul-list-fst">
            <li className="li-st">Home</li>
            <li className="li-st">About</li>
            <li className="li-st">Schedules</li>
            <li className="li-st">Membership</li>
            <li className="li-st">Pricing</li>
        </ul>
        <div className="menu-con">
            <AiOutlineMenu className="ham-menu" onClick={onClickBtn}/>
            <ul className="ul-list-small">
                <li className="offer-sm-btn">Offers</li>
                <li><button className="course-btn-small">Courses</button></li>
            </ul>            
        </div>
        <ul className={valueClick}>
            <li className="li-st-sm">Home</li>
            <li className="li-st-sm">About</li>
            <li className="li-st-sm">Schedules</li>
            <li className="li-st-sm">Membership</li>
             
            </ul>

        <div>
            <ul className="ul-list-sec">
                <li className="offer-li">Offers</li>
                <li><button className="course-btn">Courses</button></li>
            </ul>
        </div>
        
    </nav>
    )
}
export default Header