import { useDispatch, useSelector } from "react-redux";
import "../counter/counter.css"
import { useNavigate } from "react-router-dom";
import MasterContext from "../../context/MasterContext";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import api from '../../WebApi/api';

export default function Counter(){
  const {cusCount} = useContext(MasterContext);
  const {restCount} = useContext(MasterContext);
  //const {bookCount} = useContext(MasterContext);
 // const {bookings} = useContext(MasterContext);
  let {currentUser} = useSelector(state=>state.rest);
  const {reviews} = useContext(MasterContext);
  //const {reviewCount} = useContext(MasterContext);
  const [bookCount, setBookCount] = useState([]);
  const [restCustomerCount, setrestCustomerCount] = useState([]);
  const [tbookCount, setTBookCount] = useState([]);
  const [reviewCount, setReviewCount] = useState([]);
  const [bookings, setBookings] = useState([]);
  
  const [count,setCount] = useState(0);
  var sum=0;

   var add = ()=> bookings.map(amount=>{
    if(!currentUser)
      <center></center>
    else{
    sum = sum+amount.bookingAmount*1;
    document.getElementById("count").innerHTML=sum;
    }
  })

  const loadBookCount = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.BOOKING_COUNT+id);
      if (response.data.status)
        setBookCount(response.data);
        setCount(1);
    } catch (err) {
      console.log("Catch Error Generated.....");
    }
  }

  const loadTBookCount = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.TODAY_BOOKINGS_COUNT+id);
      console.log(response.data," Today booking");
      if (response.data.status)
        setTBookCount(response.data);
        setCount(1);
    } catch (err) {
      console.log("Catch Error Generated.....");
    }
  }

  const loadCustomerCount = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.REST_CUSTOMER_COUNT);
      if (response.data.status)
        setrestCustomerCount(response.data.record);
        setCount(1);
    } catch (err) {
      console.log(err,"Catch Error Generated.....");
    }
  }

  const loadReviewCount = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.REVIEW_COUNT+id);

      if (response.data.status)
        setReviewCount(response.data);
        setCount(1);

    } catch (err) {
      console.log("Catch Error Generated.....")
    }
  }

  const loadBookings = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.BOOKINGS+id);
      if (response.data.status)
        setBookings(response.data.res);
    }
    catch (err) {
      console.log("Catch executed/ Netwrok Error");
    }
  }

  function myid(){
    if(!count){
    loadBookCount();
    loadReviewCount();
    loadBookings();
    loadTBookCount();
    loadCustomerCount();
    }
  }
 
  useEffect(()=>{
    add();
  })
   
  return <>
    
 {!currentUser&&
 <div className="skills">
 <div className="container">
   <div className="row">
     <div className="col-xs-12">
       <div className="section-heading text-center">
       <div>
        <br/>
      <center><h1>Mezbaan Progress</h1></center>
      <br/> 
    </div>
       </div>
     </div>
   </div>
   <div className="row text-center">
     <div className="col-md-6">
       <div className="box">
         <div className="circlechart" >
         <h2>{cusCount.record}</h2>
          <h2 style={{width:"65px"}} style={{color:"#ff3333"}}>Total Customers<br/><i  class="fa-solid fas fa-users"></i></h2>
          
         </div>
       </div>
     </div>
     <div className="col-md-6">
       <div className="box">
         <div className="circlechart" >
         <h2>{restCount.record}</h2>
          {/* <h2 style={{color:"#ff3333"}}>Total Restaurants</h2> */}
          <h2 style={{color:"#ff3333"}}>Total Restaurants<br/><img src="mezban-images/rest3.png" style={{width:"45px"}}/></h2>

         </div>
       </div>
     </div>
     <div>
    <br/><br/>
    </div>
   </div>
 </div>
</div>
}

{currentUser&&myid()}
{currentUser&&<div className="skills">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="section-heading text-center">
          <br/><br/><br/>
          <h2>Progress</h2>
        </div>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart">
          
          <h1>{bookCount.record}</h1>
          <h2 style={{color:"#ff3333"}}>Total Customers<br/><i class="fa-solid fas fa-users"></i></h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart" >
          <h1>{bookCount.record}</h1>
         
            
         <h2 style={{color:"#ff3333"}}>Total Bookings<br/> <i class="fa-solid fa fa-handshake"></i></h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart">
         <h1 id="count" >0</h1>
          <h2 style={{color:"#ff3333"}}>Total Profit   <br/><i class="fa-solid fa-level-up"></i></h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart">
          <h1>{tbookCount.record}</h1>
          <h2 style={{color:"#ff3333"}}>Today's Bookings<i class="fa-solid fa fa-handshake"></i></h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart" >
          <h1>0</h1>
          <h2 style={{color:"#ff3333"}}>Total cancells<br/><img src="mezban-images/cancel.png" style={{width:"35px"}}/></h2>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="box">
          <div className="circlechart" >
          <h1>{reviewCount.record}</h1>
          
          <h2 style={{color:"#ff3333"}}>Total Reviews <br/> <i class="fa-solid fa-edit (alias)"></i>
</h2>
          </div>
        </div>
      </div>
      <div>
      <img height={200} src="/mezban-images/mezbaan-high-resolution-logo-black-on-transparent-background.png"/>
    </div>
    </div>
  </div>
</div>}




    </>
}