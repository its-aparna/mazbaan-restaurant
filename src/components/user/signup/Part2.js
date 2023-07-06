import React from 'react';
import "../signup/signup.css"

function Part2({ data, setData, onNext, onPrevious }) {
    console.log(data,"=============================");
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return <center>
        <div id="main">
            <div className="wrapper">
                <div className="title">Signup Form</div>
                <div className='container col-lg-12 col-md-12 col-sm-12 col-12 ml-1'>
                    <form action="#">
                        <div className="field">
                            <input type="text"
                                             name="state"
                                             value={data.state}
                                             onChange={handleChange}
                                             required="" />
                            <label>State</label>
                        </div>
                        <div className="field">
                            <input type="text"
                                             name="city"
                                             value={data.city}
                                             onChange={handleChange}
                                             required="" />
                            <label>City</label>
                        </div>
                        <div className="field">
                            <input type="text"
                                             name="address"
                                             value={data.address}
                                             onChange={handleChange}
                                             required="" />
                            <label>Address</label>
                        </div>

                        <div className="field">
                                    <input type="text"
                                             name="contact"
                                             value={data.contact}
                                             onChange={handleChange}
                                             required="" />
                                    <label>Contact</label>
                                </div>
                        {/* <div className="field">
                            <input type="text"
                                             name="longitude"
                                             value={data.longitude}
                                             onChange={handleChange}
                                             required="" />
                            <label>Longitude</label>
                        </div>
                        <div className="field">
                            <input type="text"
                                             name="latitude"
                                             value={data.latitude}
                                             onChange={handleChange}
                                             required=""/>
                            <label>Latitude</label>.
                        </div> */}

                        <div className="field">
                            <input type="text"
                                             name="fssai"
                                             value={data.fssai}
                                             onChange={handleChange}
                                             required="" />
                            <label>FSSAI</label>
                        </div>
                        <div className="content">
                        </div>
                        <div className='d-flex ml-5'>


                        </div>
                        
                        <div id="signbtn" className='field'>
                            <button className="main-btn mt-2 col-lg-5 col-md-5 col-sm-5 col-5 " onClick={onPrevious}>Previous</button>

                            <button className="main-btn mt-2 col-lg-5 col-md-5 col-sm-5 col-5 offset-1" onClick={onNext}>Next</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    </center>
}

export default Part2;