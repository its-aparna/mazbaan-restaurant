import { useContext, useEffect, useState } from "react";
import Navbar from "../Nav/Navbar"
import "./plan.css"
import MasterContext from "../../context/MasterContext";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../WebApi/api";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../footer/footer";


export default function Plan() {
  const navigate = useNavigate();
  const { plans } = useContext(MasterContext);
  let { currentUser } = useSelector(state => state.rest);
  let id = currentUser?._id;
  const [countdown, setCountdown] = useState({});

  const subscribe = async (plan) => {
      let response = await axios.post(api.PAYMENT_SUBSCRIBE, { amount: plan.price });
     
      if (response.status != 200)
        window.alert("Something Went Wrong");
      else {
        let data = response.data
        const options = {
          key: "rzp_test_Vhg1kq9b86udsY",
          currency: data.currency,
          amount: plan.price,
          name: "Mezbaan",
          description: "Book Your Table",
          image: "https://tse2.mm.bing.net/th?id=OIP.4p7ztcUW4gAM6_1VGZ1EVwHaIj&pid=Api&P=0",
          order_id: data.id,
          handler: async function (response) {
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);
            try {
              let subscribeResponse = await axios.post(api.SUBSCRIBE_PLAN, { restaurantId:id , planId:plan._id, duration:plan.duration });
              if (subscribeResponse.data.status) {
                window.alert("Plan Subscribed Successfully"); 
                toast.success("Plan Subscribed Successfully");
                const { startingDate, endingDate } = subscribeResponse.data.result;
              console.log(startingDate+"============="+endingDate);
              setCountdown({ startingDate, endingDate });
              navigate("/");
                // console.log(subscribeResponse.data.result,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                // window.alert("Plan Subscribed Successfully");
                // toast.success("Plan Subscribed Successfully");
                // const { startingDate, endingDate } = subscribeResponse.data.result;
                // console.log(startingDate+"============="+endingDate);
                // navigate("/");
              }
            } catch (err) {
              console.log(err);
              toast.error("Something went wrong !!");
              window.alert("Something went wrong !!");
              navigate("/");
            }
          },
          theme: {
            color: "#ff3333"
          }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    
  }

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    useEffect(() => {
      loadScript("https://checkout.razorpay.com/v1/checkout.js");
    },[])

    console.log('plans:', plans);

    return <>
    <ToastContainer/>
      <Navbar /> 
      <br /><br /><br />
      <div className="subscribe-plan">
        <h2>Subscription Plans</h2>
        <div className="row">
          {!currentUser && plans && Array.isArray(plans) && plans.map((res, index) => (
            <div className="col-md-4 col-lg-4" key={index}>
              <h2></h2>
              <div id="plan-card" className="plan">
                <h3>{res.planName.toUpperCase()}</h3>
                <p className="duration">Duration : {res.duration}</p>
                <p className="price">Price : {res.price} RS</p>
                <Link to="/signin"><button className="subscribe-btn">Subscribe</button> </Link>
              </div>
            </div>
          ))}

          {currentUser && plans && Array.isArray(plans) && plans.map((res, index) => (
            <div className="col-md-4 col-lg-4" key={index}>
              <h2></h2>
              <div id="plan-card" className="plan">
                <h3>{res.planName.toUpperCase()}</h3>
                <p className="duration">Duration : {res.duration}</p>
                <p className="price">Price : {res.price} RS</p>
                <button onClick={() => subscribe(res)} className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
<Footer/>
    </>
  }
