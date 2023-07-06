import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../../WebApi/api';
//import "../Signin/signin.css"
import "../signup/signup.css"
import { setUser } from '../../../redux-config/restSlice';

function Signin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (event)=>{
       try{ 
         event.preventDefault();
         const response = await axios.post(api.REST_SIGNIN,{email,password});
         dispatch(setUser(response.data.result))
         navigate("/");
       }
       catch(err){
        toast.error("Invalid Email And Password");
       }
    }
    return <>
    <ToastContainer/>
   
 
    <center><div id="main">
    <div className="wrapper">

  <div className="title">Login Form</div>
  <div className='container col-lg-12 col-md-12 col-sm-12 col-12 ml-1'>
  <form onSubmit={handleSubmit} action="#">
    <div className="field">
      <input onChange={(event) => setEmail(event.target.value)}  type="text" required="" />
      <label>Email Address</label>
    </div>
    <div className="field">
      <input  onChange={(event) => setPassword(event.target.value)}  type="password" required="" />
      <label>Password</label>
    </div>
    <div className="content">
    </div>
    <div className="field">
      <input type="submit" defaultValue="Login" />
    </div>
    <div className="signup-link">
      or <Link to="/signup">Signup now</Link>
    </div>
  </form>
  </div>
</div>
</div>
</center>

  
    
   
    </>
}
export default Signin;