import React, { useState } from 'react';
import { validClosingTime, validEmail, validName, validOpeningTime, validPassword } from '../../regex/regex';
import { toast } from 'react-toastify';
import "./signup.css";
import { Link } from 'react-router-dom';


function Part1({ data, setData, onNext }) {

    const [name, setName] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [openingTimeError, setOpeningTimeError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [closingTimeError, setClosingTimeError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
console.log(data,"==============================================");
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    

    function nameHandeler(e) {
        if (!(validName.test(e.target.value))) {
            setNameError(true);
            toast.warning("invalid name : 400");
        }
        else
            setNameError(false);
    }

    function emailHandeler(e) {
        if (!(validEmail.test(e.target.value))) {
            setEmailError(true);
            toast.warning("invalid email : 400");
        }
        else
            setEmailError(false);
    }
    function passwordHandeler(e) {
        if (!(validPassword.test(e.target.value))) {
            setPasswordError(true);
            toast.warning("invalid password : 400");
        }
        else
            setPasswordError(false);
    }

    function closingTimeHandler(e) {
        if (!(validClosingTime.test(e.target.value))) {
            setClosingTimeError(true);
            toast.warning("invalid");

        }
    }

    function openingTimeHandler(e) {
        if (!(validOpeningTime.test(e.target.value))) {
            setOpeningTimeError(true);
            toast.warning("invalid");

        }
    }

    return (


        <>
            <center>
                <div id="main">
                    <div className="wrapper">
                        <div className="title">Signup Form</div>
                        <div className='container col-lg-12 col-md-12 col-sm-12 col-12 ml-1'>
                            <form action="#">
                                <div className="field">
                                    <input  type="text"
                                             name="name"
                                             value={data.name}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Restaurant Name</label>
                                </div>
                                <div className="field">
                                    <input  
                                             type="text"
                                             name="email"
                                             value={data.email}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Email Address</label>
                                </div>
                                <div className="field">
                                    <input  type="password"
                                             name="password"
                                             value={data.password}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Password</label>
                                </div>
                                <div className="field">
                                    <input  type="password"
                                             name="confirmPassword"
                                             value={data.confirmPassword}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Confirm Password</label>
                                </div>
                                <div className="field">
                                    <input  type="text"
                                             name="openingTime"
                                             value={data.openingTime}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Opening Time</label>
                                </div>
                                <div className="field">
                                    <input type="text"
                                             name="closingTime"
                                             value={data.closingTime}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Closing Time</label>
                                </div>
                                <div className="content">
                                </div>
                                <div className='d-flex ml-5 row'>
                                    <button className="main-btn mt-2 col-lg-5 col-md-5 col-sm-5 col-5 offset-5" onClick={onNext}>Next</button>
                                </div>
                                <div className="signup-link">
                                  or <Link to="/signin">SignIn Now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}

export default Part1;