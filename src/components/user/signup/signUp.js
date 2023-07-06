
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Signin/signin.css";
import api from "../../../WebApi/api";
import { validPassword,validEmail,validName,validContact, validAvgper2, validRating, validAddress, validOpeningTime, validClosingTime, validTotalTable, validFSSAI } from "../../regex/regex";
import SignupForm from "./SignupForm";
export default function SignUp() {
  const [ step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [address,setAddress] = useState("");
  const [contact,setContact] = useState("");
  const [openingTime,setOpeningTime]= useState("");
  const [closingTime,setClosingTime] = useState("");
  const [totalTable,setTotalTable] = useState("");
  const [FSSAI,setFSSAI] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [averageCostPer2,setAverageCostPer2] = useState("");
  const [rating,setRating] = useState("");
   const [openingTimeError,setOpeningTimeError]=useState(false);
   const[passwordError,setPasswordError] = useState(false);
   const[emailError,setEmailError] = useState(false);
   const[contactError,setContactError] = useState(false);
   const[nameError,setNameError] = useState(false);
   const [closingTimeError,setClosingTimeError]=useState(false);
   const [totalTableError,setTotalTableError]=useState(false);
   const [ratingError,setRatingError]=useState(false);
   const [averageCostPer2Error,setAverageCostPer2Error]=useState(false);
   const [FSSAIError,setFSSAIError]=useState(false);
   const [confirmPasswordError,setConfirmPasswordError]=useState(false);
   const [addressError,setAddressError]=useState(false);

    
    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        try{
          console.log("======================================");
            event.preventDefault();
            console.log("======================================");

            let response = await axios.post(api.REST_SIGNUP,{name});
            console.log("============"+response.data+"============================================");
            if(response.data.status){
                navigate("/signin");
            } 
        }catch(err){
            console.log(err);
        }
    }
    
    function nameHandeler (e){
        if(!(validName.test(e.target.value))){
            setNameError(true);
            toast.warning("invalid name : 400");
        }    
        else
            setNameError(false);
    }
    
    function emailHandeler (e){
        if(!(validEmail.test(e.target.value))){
            setEmailError(true);
            toast.warning("invalid email : 400");
        }     
        else
        setEmailError(false);
    }

    function passwordHandeler (e){
        if(!(validPassword.test(e.target.value))){
            setPasswordError(true);
            toast.warning("invalid password : 400");
        }   
        else
        setPasswordError(false);
    }

    function contactHandeler (e){
        if(!(validContact.test(e.target.value))){
            setContactError(true);
            toast.warning("invalid contact : 400");
        }
            
        else
        setContactError(false);
    }

    function avgper2Handler(e){
      if(!(validAvgper2.test(e.target.value))){
        setAverageCostPer2Error(true);
        toast.warning("invalid");

      }
    }

    function closingTimeHandler(e){
      if(!(validClosingTime.test(e.target.value))){
        setClosingTimeError(true);
        toast.warning("invalid");

      }
    }

    function openingTimeHandler(e){
      if(!(validOpeningTime.test(e.target.value))){
        setOpeningTimeError(true);
        toast.warning("invalid");

      }
    }

    function addressHandler(e){
      if(!(validAddress.test(e.target.value))){
        setAddressError(true);
        toast.warning("Invalid Address");

      }
    }

    function totalTableHandler(e){
       if(!(validTotalTable.test(e.target.value))){
    setTotalTableError(true);
    toast.warning("invalid");

  }
    }

  function fssaiHandler(e){
    if(!(validFSSAI.test(e.target.value))){
      setFSSAIError(true);
      toast.warning("invalid");
    }
  }

  function ratingHandler(e){
    if(!(validRating.test(e.target.value))){
      setRatingError(true);
      toast.warning(true);
    }
  }

    return <>
    <ToastContainer/>
    <SignupForm/>
    {/* <section className='form-group'>
  <div className="container">
    <div className=" text-center">
      
      <form onSubmit={handleSubmit} className="col-lg-12 rounded bg-white shadow p-5">
        <h3 className="text-danger fw-bolder fs-4 mb-2">Create an Account</h3>
        <div className="fw-normal text-muted mb-2">
          Already have an account?{" "}
          <a
            href="index.html"
            className="text-danger fw-bold text-decoration-none"
          >
            Sign in here
          </a>
        </div>
        <div className="text-center text-muted text-uppercase mb-2">or</div>
       
        <div className="form-floating mb-3">
          <input
            type="text" 
            className="form-control text-danger"
          
            placeholder="name@example.com" onBlur={nameHandeler}
          />
          <label className="text-danger" htmlFor="floatingFirstName">
             Name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(event)=>setName(event.target.value)}
            type="text"
            className="form-control"
            placeholder="name@example.com" onBlur={addressHandler}
          />
          <label className="text-danger" htmlFor="floatingLastName">Address</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(event)=>setName(event.target.value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" onBlur={closingTimeHandler}
          />
          <label className="text-danger" htmlFor="floatingInput">Opening Time</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" onBlur={closingTimeHandler}
          />
          <label className="text-danger" htmlFor="floatingPassword">Closing Time</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" onBlur={totalTableHandler}
          />
          <label className="text-danger" htmlFor="floatingPassword">Total Table</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control text-danger"
            id="floatingFirstName"
            placeholder="name@example.com" onBlur={fssaiHandler}
          />
          <label className="text-danger" htmlFor="floatingFirstName">
            FSSAI
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingLastName"
            placeholder="name@example.com" onBlur={avgper2Handler}
          />
          <label className="text-danger" htmlFor="floatingLastName">Average Cost Per 2</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" 
          />
          <label className="text-danger" htmlFor="floatingInput">lattitude</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" 
          />
          <label className="text-danger" htmlFor="floatingInput">longitude</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" onBlur={emailHandeler}
          />
          <label className="text-danger" htmlFor="floatingInput">Email Address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" onBlur={passwordHandeler}
          />
          <label className="text-danger" htmlFor="floatingPassword">Password</label>
          <span className="password-info mt-2">
            Use 8 or more characters with a mix of letters, numbers &amp;
            symbols.
          </span>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" onBlur={passwordHandeler}
          />
          <label className="text-danger" htmlFor="floatingPassword">Confirm Password</label>
        </div>
        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input bg-danger"
            type="checkbox"
            id="gridCheck"
            defaultChecked="" 
          />
          <label  className="form-check-label ms-2 " htmlFor="gridCheck">
            I Agree <a href="#">Terms and conditions</a>.
          </label>
        </div>
        

        <button  type="submit" className="btn btn-danger submit_btn w-100 my-4">
          Submit
        </button>
      </form>
    </div>
  </div>
</section> */}
    </>
}