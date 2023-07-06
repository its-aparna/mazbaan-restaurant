import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Nav/Navbar";
import "../css/Home.css"
import Counter from "../counter/counter";
import SignUp from "../user/signup/signUp";
import Footer from "../footer/footer";
import BookedHistory from "../history/history";
import "../user/signup/signup.css"
import { signOut } from "../../redux-config/restSlice";
import { useDispatch, useSelector } from "react-redux";
import Plan from "../SubscribePlan/plan";
import Timer from "../Timer/timer";


export default function Home() {
  let {currentUser} = useSelector(state=>state.rest);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = ()=>{
     dispatch(signOut());
  }
  const location = useLocation();
  const { startingDate, endingDate } = location.state || {};
    return <>
        <Navbar />
       
        {!currentUser&&<div id="mainImgHolder">
            <img id="mainImg" src="/mezban-images/main4.jpg" alt="" />
            <div id="main-img-cover" className="my-cover">
            <div id="main-search-content">
                    <h1 className="first-heading">To grow your restaurant, build a strong brand with us</h1>
                   <h2 >
                      <Link to="/signup">
                  <button className="main-btn mt-2" type="button">
                    Signup
                  </button>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/signin">
                  <button className="main-btn mt-2" type="button">
                    Sign in
                  </button>
                </Link>               
                </h2>             
                </div>
            </div>
        </div>}
       
        <Counter/> 
        {/* <center> {currentUser&& (
        <Timer startingDate={startingDate} endingDate={endingDate} />
      )}</center> */}
       {!currentUser&&<Plan/>}    
        <Footer/>      
    </>
}
