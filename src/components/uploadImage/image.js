import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import "../uploadImage/image.css"

export default function  ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);


    fetch('', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  function handleChange(e) {
    console.log("YYYYYYYYYYYYYYYYYYY"+e.target.files);
    setSelectedFile(URL.createObjectURL(e.target.files[1]));
}

  return (
    <div>
    <center>  <form id="form" onSubmit={handleChange}>
      <br/>
        <input id="input" type="file"onChange={handleChange} />
        <button  className='btn-success' id="button" type="submit">Upload</button>
        
        <img width={300}  src={selectedFile} alt="" />
      </form></center>
    </div>
  );
}
