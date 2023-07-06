import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/user/signup/signUp';
import Signin from './components/user/Signin/Signin';
import { Profiler, useEffect, useState } from 'react';
import axios from 'axios';
import MasterContext from './context/MasterContext';
import BookedHistory from './components/history/history';
import SignUp from './components/user/signup/signUp';
import Profile from './components/Profile/Profile';
import ImageUpload from './components/uploadImage/image';
import store from './redux-config/store';
import restSlice from './redux-config/restSlice';
import Plan from './components/SubscribePlan/plan';
import Reviews from './components/Reviews/reviews';
import api from '../src/WebApi/api';
import { useSelector } from 'react-redux';
import VerifyPassword from './components/password/verifyPassword';
import UpdatePassword from './components/password/updatePassword';


function App() {
  const {currentUser} = useSelector(state=>state.rest)
  let id = currentUser?._id;
 // console.log(id);
  const [bookings, setBookings] = useState([]);
  // const [profiles, setProfile] = useState([]);
  const [cusCount, setCusCount] = useState([]);
  const [restCount, setRestCount] = useState([]);
  const [plans, setPlans] = useState([]);
  const [reviews, setReviews] = useState([]);

 
  const loadBookings = async () => {
    try {
      let response = await axios.get(api.BOOKINGS);
      if (response.data.status)
        setBookings(response.data.res);
    }
    catch (err) {
      console.log("Catch executed/ Netwrok Error");
    }
  }

  // const loadProfile = async () => {
  //   try {
  //     let response = await axios.get(api.PROFILE);
  //     if (response.data.status)
  //       setProfile(response.data.res);

  //   } catch (err) {
  //     console.log("Catch Error Generated.....")
  //   }
  // }

  const loadCusCount = async () => {
    try {
      let response = await axios.get("http://localhost:3000/customer/count");
      if (response.data.status)
        setCusCount(response.data);

    } catch (err) {
      console.log("Catch Error Generated.....")
    }
  }

  const loadRestCount = async () => {
    try {
      let response = await axios.get(api.REST_COUNT);
      if (response.data.status)
        setRestCount(response.data);

    } catch (err) {
      console.log("Catch Error Generated.....")
    }
  }

  const loadPlans = async () => {
    try {
      let response = await axios.get(api.PLAN_LIST);
      if (response.data.status)
        setPlans(response.data.result);
    }
    catch (err) {
      console.log("Catch executed/ Netwrok Error");
    }
  }

  const loadReviews = async () => {
    try {
      let response = await axios.get(api.REVIEW_LIST);
      if (response.data.status)
        setReviews(response.data.reviews);
    }
    catch (err) {
      console.log("Catch executed/ Netwrok Error");
    }
  }

  useEffect(() => {
    loadBookings();
    loadCusCount();
    loadRestCount();
    loadPlans();
    loadReviews();
  },
    [])
  return <div id='container' className='container-fluid'>
    <MasterContext.Provider value={{ bookings: bookings, cusCount: cusCount, plans: plans, reviews: reviews,  restCount: restCount }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/history' element={<BookedHistory />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/upload' element={<ImageUpload />} />
        <Route path='/plan' element={<Plan />} />
        {/* <Route path='/verifypass' element={<VerifyPassword/>}/> */}
        <Route path='/changepass' element={<UpdatePassword/>}/>
      </Routes>
    </MasterContext.Provider>

  </div>
}

export default App;