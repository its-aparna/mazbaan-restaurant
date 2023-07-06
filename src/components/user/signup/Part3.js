import React, { useState } from 'react';
import api from '../../../WebApi/api';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

function Part3({ data,setData, onSubmit, onPrevious }) {
    const [ratingError, setRatingError] = useState(false);
    const [averageCostPer2Error, setAverageCostPer2Error] = useState(false);
    const [FSSAIError, setFSSAIError] = useState(false);

    const [file, setFile] = useState(null);
    const [thumb, setThumb] = useState(null);

    const handleChange = (e) => {
        console.log(data,"---------Part 3 Data-----------------------");
        setData({ ...data, [e.target.name]: e.target.value });
      };

    // const handleFileChange = (event) => {
    //     setFile(Array.from(event.target.files));
    // };
    // const handleFileChange1 = (event) => {
    //     setThumb(event.target.files[0])
    // }
    // const handleUpload = async (event) => {
    //     try {
    //         event.preventDefault()

    //         const formData = new FormData();
    //         file.map((f) => {
    //             formData.append('files', f);
    //         })
    //         formData.append('file', thumb);
           

    //         const response = await fetch(api.REST_SIGNUP, {
    //             method: 'POST',
    //             body: formData
    //         })
    //         console.log(response);
    //         if (response.ok) {
    //             console.log("File uploaded")
    //             toast.success("new product add successful")
    //             Navigate("/")
    //         }
    //         else {
    //             console.error("Error uploading data");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }


    const trial = ()=>{

    }
    return (
        <>
            <center>
                <div id="main">
                    <div className="wrapper">
                        <div className="title">Signup Form</div>
                        <div className='container col-lg-12 col-md-12 col-sm-12 col-12 ml-1'>
                            <form action="#">
                                {/* <div className="field">
                                <input  type="text" required="" />
                                <label>Upload Image</label>
                            </div> */}
                                {/* <div className="user-box">
                                    <label>Thumbnail</label><br />
                                    <input type="file" name='thum' />                        
                                </div>
                                
                                <div className="user-box">

                                    <label>Images</label><br />
                                    <input type="file" name='image' multiple />
                                </div>
                                <div className="mb-5">
                                    <button className="btn btn-primary mt-3" >Upload File</button>
                                </div>
                                <div className="field">
                                    <input type="text" required="" />
                                    <label>Upload Menu</label>
                                </div> */}
                                <div className="field">
                                    <input type="text"
                                             name="avgCostPer2"
                                             value={data.avgCostPer2}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Average Cost Per Two</label>
                                </div>

                                <div className="field">
                                    <input type="text"
                                             name="totaltables"
                                             value={data.totaltables}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Total Tables</label>
                                </div>

                                <div className="field">
                                    <input type="text"
                                             name="description"
                                             value={data.description}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Description</label>
                                </div>

                                <div className="field">
                                    <input type="text"
                                             name="cuisines"
                                             value={data.cuisines}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Cuisines</label>
                                </div>
                                <div className="field">
                                    <input   type="text"
                                             name="facilities"
                                             value={data.facilities}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Facilities</label>
                                </div>

                                <div className="field">
                                    <input type="text"
                                             name="rating"
                                             value={data.rating}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Rating</label>
                                </div>
                                <div className="content">
                                </div>
                                <div className='field'>
                                    <button className="main-btn mt-2 col-lg-5 col-md-5 col-sm-5 col-5" onClick={onPrevious}>Previous</button>
                                    <button className="main-btn mt-2 col-lg-5 col-md-5 col-sm-5 col-5 offset-1" onClick={onSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}

export default Part3;