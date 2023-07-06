import { useContext } from "react";
import MasterContext from "../../context/MasterContext";
import Navbar from "../Nav/Navbar";
import "../Reviews/reviews.css"

export default function Reviews(){
    const {reviews} = useContext(MasterContext);
    return <>
       <Navbar/>
       <br/><br/><br/><br/>
       <center><h1>Customer Reviews</h1></center>
       <br/><br/>
       <section className="user-reviews">
       {reviews && reviews.map((res, index) => <div className="review">
    <div className="review-content">
      <h3 className="review-title">Customer Review :  {res.review}</h3>
      <h5 className="review-title">Date Of Review  :  {res.date}</h5>
      <h5 className="review-title">Time Of Review  :  {res.time}</h5>
    </div>
  </div>)}
  
</section>


    </>
}
