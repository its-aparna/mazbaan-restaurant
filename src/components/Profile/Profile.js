import { Link, useLocation } from "react-router-dom";
import "../Profile/profile.css"
import { useContext, useState } from "react";
import MasterContext from "../../context/MasterContext";
import Navbar from "../Nav/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import api from '../../WebApi/api';
import { useSelector } from "react-redux";
import Footer from "../footer/footer";



export default function Profile() {
  let { currentUser } = useSelector(state => state.rest);
  const [cuisines, setCuisine] = useState("");
  const [facilities, setFacility] = useState("");
  const [value, setValue] = useState("");
  const [rvalue, setrvalue] = useState("");
  const [rvalue2, setrvalue2] = useState("");
  const [value2, setValue2] = useState("");
  const [profiles, setProfile] = useState([]);
  const [count, setCount] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);

  let id = currentUser?._id;


  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage.name);
console.log(formData);
      const response = await axios.post(api.UPLOAD_IMAGE,{id:id, imageName:selectedImage.name});
      console.log(response.status,'!!!!!!!!!!!!!!!!!!');
       if(response.data.status){
        toast.success("Image Added Successfully . . .");
        console.log(profiles,'~~~~~~~~~~~~~~~~~~~~~');
        let profile = {...profiles}; 
        console.log(profile,'~~profile....~~~~^^^^^^^^^^^');
       let profileimg = [...profiles.images]; 
       profileimg.push(selectedImage.name);
       console.log(profileimg,'~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^');
        delete profile.images;
        console.log(profile,'~~~~~~~~~~~~~~~~~~~11111111111111111111~~^^^^^^^^^^^');
        profile.images = profileimg;  //arr
        console.log(profile,'~~~~~~~~~~~~~~~~~~~2222222222222222222~~^^^^^^^^^^^');
        setProfile(profile);
       }
       else{
        toast.error("Something Went Wrong . . .")
       }
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  //console.log("~~~~~~~~~~~~~~~~~~~~~~~~",profiles.images);

  const loadProfile = async () => {
    try {
      let id = currentUser?._id;
      let response = await axios.get(api.PROFILE + id);
      console.log(response.data.res);
      setCount(1);
      if (response.data.status)
        setProfile(response.data.res);

    } catch (err) {
      console.log(err + "Catch Error Generated.....")
    }
  }

  const handleAddCuisine = async (event) => {
    try {
      const cuisine = value;
      let allCuisines = profiles.cuisines;
      console.log(allCuisines,"======================================================");
      console.log(profiles);
      console.log("======================================================");

      event.preventDefault();
      let id = currentUser._id
      let response = axios.post(api.ADD_CUISINE + id, { cuisine });
      setCount(1);
      if (response) {
        
        setCuisine([...allCuisines, cuisine]);
        setValue("");
        toast.success("Cuisine successfully added.............");
        let profile = {...profiles}; 
        console.log(profile,'~~profile....~~~~^^^^^^^^^^^');
        let loadAllCuisines = [...profiles.cuisines] ;
        loadAllCuisines.push(cuisine);
        console.log(loadAllCuisines,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        delete profile.cuisines;
        console.log(profile,'~~~~~~~~~~~~~~~~~~~11111111111111111111~~^^^^^^^^^^^');
        profile.cuisines = loadAllCuisines;
        console.log(profile,"%%%%%%%%%%%%%%%%%%%%");
        setProfile(profile);

      }
    }
    catch (err) {
      toast.error("Cuisine Not Added....")
      console.log(err);
    }
  }

  const handleAddFacility = async (event) => {
    try {

      const facility = value2;
      let allFacilities = profiles.facilities;
      event.preventDefault();
      let id = currentUser._id
      let response = axios.post(api.ADD_FACILITY + id, { facility })
      setCount(1);
      if (response) {
        setFacility([...allFacilities, facility]);
        setValue("");
        toast.success("Facility successfully added.............");
        let profile = {...profiles}; 
        console.log(profile,'~~profile....~~~~^^^^^^^^^^^');
        let loadAllFac = [...profiles.facilities] ;
        loadAllFac.push(facility);
        console.log(loadAllFac,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        delete profile.facilities;
        console.log(profile,'~~~~~~~~~~~~~~~~~~~11111111111111111111~~^^^^^^^^^^^');
        profile.facilities = loadAllFac;
        console.log(profile,"%%%%%%%%%%%%%%%%%%%%");
        setProfile(profile);
      }

    }
    catch (err) {
      toast.error("Facility Not Added....")
      console.log(err);
    }
  }

  const handleRemoveCuisine = async (event) => {
    try {
      const cuisine = rvalue;
      let allCuisines = profiles.cuisines;

      event.preventDefault();
      let id = currentUser._id;
      let response = axios.post(api.REMOVE_CUISINE + id, { cuisine });
      setrvalue("");
      console.log(response, "=======================");
      if (response) {
        let updatedCuisines = allCuisines.filter(c => c !== cuisine);
        console.log(updatedCuisines, "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{");
        setCuisine(updatedCuisines);
        // setrvalue(""); 
        toast.success("Cuisine successfully removed.............");
        let profile = {...profiles}; 
        console.log(profile,'~~profile....~~~~^^^^^^^^^^^');
        let loadAllCuisines = [...profiles.cuisines] ;
        loadAllCuisines.pop(cuisine);
        console.log(loadAllCuisines,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        delete profile.cuisines;
        console.log(profile,'~~~~~~~~~~~~~~~~~~~11111111111111111111~~^^^^^^^^^^^');
        profile.cuisines = loadAllCuisines;
        console.log(profile,"%%%%%%%%%%%%%%%%%%%%");
        setProfile(profile);
      }
    }
    catch (err) {
      toast.error("Cuisine Not Removed....")
      console.log(err);
    }
  }

  const handleRemoveFacility = async (event) => {
    try {
      const facility = rvalue2;
      console.log(facility, "-----------------");
      let allFacilities = profiles.facilities;

      event.preventDefault();
      let id = currentUser._id;
      let response = axios.post(api.REMOVE_FACILITY + id, { facility });
      if (response) {
        let updatedFacilities = allFacilities.filter(c => c !== facility); // remove the cuisine object from the cuisines list
        console.log(updatedFacilities);
        setFacility(updatedFacilities);
        setrvalue2(""); // clear the input field
        toast.success("facility successfully removed.............");
        let profile = {...profiles}; 
        console.log(profile,'~~profile....~~~~^^^^^^^^^^^');
        let loadAllFac = [...profiles.facilities] ;
        loadAllFac.pop(facility);
        console.log(loadAllFac,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        delete profile.facilities;
        console.log(profile,'~~~~~~~~~~~~~~~~~~~11111111111111111111~~^^^^^^^^^^^');
        profile.facilities = loadAllFac;
        console.log(profile,"%%%%%%%%%%%%%%%%%%%%");
        setProfile(profile);
      }
    }
    catch (err) {
      toast.error("facility Not Removed....")
      console.log(err);
    }
  }

  function myid() {
    if (!count) {
      loadProfile();
      handleAddCuisine();
      handleAddFacility();
    }
  }

  return <>
    <ToastContainer />
    <Navbar />
    {currentUser && myid()}
    <br /><br /><br /><br /><br />
    <div id="main-content">
      <section className="section">
        <div className="row">

          <div className="col-6 col-sm-6 col-md-6 col-lg-6 ">
            <div className="p1 container shadow border">
              <h2 className="mt-2">Restaurant Details</h2>
              <table className="resTbl2 table table-responsive table-borderless ">
                <thead>
                  <th className="col-lg-8">sdfs</th>
                  <th className="col-lg-8">sdfs</th>
                </thead>
                <tr>
                  <td><b>Name</b></td>
                  <td>{profiles?.name}</td>
                </tr>
                <tr>
                  <td><b>Contact</b></td>
                  <td>{profiles?.contact}</td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>{profiles?.email}</td>
                </tr>
                <tr>
                  <td><b>FSSAI</b></td>
                  <td>{profiles?.fssai}</td>
                </tr>
                <tr>
                  <td><b>Opening Time</b></td>
                  <td>{profiles?.openingTime}</td>
                </tr>
                <tr>
                  <td><b>Closing Time</b></td>
                  <td>{profiles?.closingTime}</td>
                </tr>
                <tr>
                  <td><b>Total Tables</b></td>
                  <td>{profiles?.totalTables}</td>
                </tr>

                {/* <tr>
                  <td><b>Address</b></td>
                  <td>{profiles?.address.state + "," + profiles?.address.city+" , ("+profiles?.address.details+")"}</td>
                </tr> */}

                <tr>
                  <td><b>Description</b></td>
                  <td>{profiles?.description}</td>
                </tr>
                <tr>
                  <td><b>Cuisines</b></td>
                  <td>
                    {
                      profiles.cuisines?.map((cuisine) => cuisine + " , ")
                    }
                  </td>

                </tr>
                <tr>
                  <td><b>Facilities</b></td>
                  <td>
                    {
                      profiles.facilities?.map((facility) => facility + " , ")
                    }
                    {/* profiles&& Array.isArray(profiles) */}
                  </td>
                </tr>




              </table>

              <table>
                <tr>
                  <td> <form onSubmit={handleAddCuisine} >
                    <input onChange={(event) => setValue(event.target.value)} type="text" class="form-control" id="inputid" placeholder="Add Cuisine Here" />
                    <br />
                    <center><button className="btn btn-outline-success">Add</button></center>
                  </form></td>
                  <td> <form onSubmit={handleRemoveCuisine}  >
                    <input onChange={(event) => setrvalue(event.target.value)} type="text" class="form-control" id="inputid" placeholder="Remove Cuisine Here" />
                    <br />
                    <center><button className="btn btn-outline-danger">Remove</button></center>
                  </form></td>
                </tr>
              </table>


              <table>
                <tr>
                  <td> <form onSubmit={handleAddFacility} >
                    <input onChange={(event) => setValue2(event.target.value)} type="text" class="form-control" id="inputid" placeholder="Add Facility Here" />
                    <br />
                    <center><button className="btn btn-outline-success">Add</button></center>
                  </form></td>
                  <td> <form onSubmit={handleRemoveFacility} >
                    <input onChange={(event) => setrvalue2(event.target.value)} type="text" class="form-control" id="inputid" placeholder="Remove Facility Here" />
                    <br />
                    <center><button className="btn btn-outline-danger">Remove</button></center>
                  </form></td>
                </tr>


              </table>

              <table>
                <center>
                <tr>
                  <td>Add Images in Your Restaurant&nbsp;&nbsp;<input type="file" accept="image/*" onChange={handleImageChange} /><Link ><button className="main-btn mt-3 col-lg-3 col-md-3 col-sm-3 col-3 " onClick={handleImageUpload}>Upload</button></Link></td>
                </tr>
                </center>

                <center>
                <tr>
                  <td>To Change Your Password <Link to="/changepass">Click Here</Link></td>
                </tr>
                </center>
              </table>

              


            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div className="p1 container shadow  border ">
              <h1 className="mt-2">{profiles?.name} Images</h1>
              <div className="container">
                <div className="row">

                </div>
              </div>
              {/* <div className="imgMainDiv">
                <img style={{ width: "95%", marginLeft: "2.5%" }} className="img-fluid mb-3" src={"mezban-images/" + profiles.images[0]} alt="img" />
              </div> */}

              <div className="p2">
                <div className="col-12 ">
                  <div className="row">
                    {profiles && profiles.images?.map((image) => {
                      return <div className="sideImgHolder resImg col-12">
                        <img  height={400} className="sideImg mb-2 " src={"mezban-images/" + image} alt="Image" />

                      </div>

                    })}

                  </div>
                  <br/> <br/><br/> 
                 
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </>
}