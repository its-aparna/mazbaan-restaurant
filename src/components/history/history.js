import { useDispatch, useSelector } from "react-redux";
import "../history/history.css"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MasterContext from "../../context/MasterContext";
import Navbar from "../Nav/Navbar";
import axios from "axios";
import api from '../../WebApi/api';
import Footer from "../footer/footer";


export default function BookedHistory() {
  const [bookings, setBookings] = useState([]);
  let { currentUser } = useSelector(state => state.rest);
  const [count, setCount] = useState(0);
  console.log(bookings, "booking");

  const loadBookings = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.BOOKINGS + id);
      if (response.data.status)
        setBookings(response.data.res);
    }
    catch (err) {
      console.log("Catch executed/ Netwrok Error");
    }
  }

  useEffect(() => {
    loadBookings();
  }, [])

  return <>
    <Navbar />
    <div className="booking-history">
      <br /><br /><br /><br />
      <h2>Booking History</h2>
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Date</th>
            <th>Time</th>
            <th>Extra Information</th>
            <th>Number Of Guests</th>
            <th>Price</th>
          </tr>
        </thead>

        {currentUser && <tbody>

          {bookings && bookings.map((booking, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.extraInfo}</td>
              <td>{booking.totalGuests}</td>
              <td>{booking.bookingAmount}</td>

            </tr>
          )}
        </tbody>}
      </table>
      {!currentUser && <center><h3>Please Login Your Restaurant To View Booking History</h3></center>}
    </div>
    <Footer/>  
  </>
}