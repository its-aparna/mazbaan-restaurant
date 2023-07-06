import "../Gallary/gallary.css"
import Navbar from "../Nav/Navbar"
export default function Gallary(){
    return <>
    <Navbar/>
    <br/><br/><br/><br/><br/>
    <center><h1>Here You Can Update Your Resaurant Image</h1></center>
    <section id="gallery" className="gallery_wrapper wrapper">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center mb-5">
        <h3>Our Gallery</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 mb-4">
        <img
          decoding="async"
          src="/mezban-images/main4.jpg"
          className="w-100 h-100"
        />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img
          decoding="async"
          src="/mezban-images/main4.jpg"
          className="w-100 h-100"
        />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img
          decoding="async"
          src="/mezban-images/main4.jpg"
          className="w-100 h-100"
        />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img
          decoding="async"
          src="/mezban-images/main4.jpg"
          className="w-100 h-100"
        />
      </div>
      <div className="col-md-8 col-sm-6 mb-4">
        <img
          decoding="async"
          src="/mezban-images/main4.jpg"
          className="w-100 h-100"
        />
      </div>
    </div>
  </div>
</section>


    </>
}


