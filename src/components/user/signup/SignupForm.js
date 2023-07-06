import React, { useState } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import api from '../../../WebApi/api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux-config/restSlice';

function SignupForm() {
  const [part1Data, setPart1Data] = useState({ name: "", email: '',password:"",confirmPassword:"",openingTime:"",closingTime:"",contact:"" });
  const [part2Data, setPart2Data] = useState({ state:"",city:"",address:"",contact:"",longitude:"",latitude:"",fssai:"" });
  const [part3Data, setPart3Data] = useState({ image:"",menu:"",avgCostPer2:"",description:"",totaltables:"0",cuisines:"",facilities:"",rating:"",totalTable:"" });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPart, setCurrentPart] = useState(1);

  const handleNext = () => {
    setCurrentPart(currentPart + 1);
  };

  const handlePrevious = () => {
    setCurrentPart(currentPart - 1);
  };

  const handleSubmit = async () => {
    const formData = {
      ...part1Data,
      ...part2Data,
      ...part3Data 
    }; 

    //console.log(formData,"*********&3#############****Form Data********************************");
    console.log(part2Data," . . . . . . . . This is Part 3 Data . . . . ");
    console.log(part1Data," . . . . . . . . This is Part 3 Data . . . . ");

    const response = await fetch(api.REST_SIGNUP, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // Request was successful
      toast.success("Signup Succesfully . . . ");
      const responseData = await response.json();
       console.log(responseData,"`````````````````````````````````````");
     // dispatch(setUser(response.data.result))
      //navigate("/");
      
      toast.success("Signup Succesfully . . . ");

      console.log(responseData,"----------Final Response Data----------------");
    } else {
      // Request failed
      console.log('Error:', response.status);
    }
  };


  // const handleSubmit = async() => {
  //   // Combine all form parts and submit the data
    // const formData = {
    //   ...part1Data,
    //   ...part2Data,
    //   ...part3Data,
    // };
  //           // const response = await fetch(api.REST_SIGNUP, {
  //           //     method: 'POST',
  //           //     body: formData
  //           // })
  //   console.log(formData); // Perform submission logic here
  // };

  return (
    
    <div>
      <ToastContainer/>
      {currentPart === 1 && (
        <Part1 data={part1Data}
         setData={setPart1Data} 
         onNext={handleNext} />
      )}
      {currentPart === 2 && (
        <Part2 data={part2Data}
          setData={setPart2Data}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {currentPart === 3 && (
        <Part3
        data={part3Data}
        setData={setPart3Data}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default SignupForm;
