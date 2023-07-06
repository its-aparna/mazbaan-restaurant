import { useEffect, useState } from "react";
import "../Timer/timer.css";

export default function Timer ({ endingDate }) {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    if(!endingDate){
        const totalSeconds = 0;
        const days = 0;
        const hours = 0;
        const minutes = 0;
        const seconds = 0;
        return { days, hours, minutes, seconds };
    }
    const totalSeconds = Math.round((new Date(endingDate) - new Date()) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endingDate]);
    return <>
        <div >
            <div className="">
                <h1 className="title">Your Subscription will be end after</h1>
                <div className="countdown-container justify-content-center">
                    <div id="time-box">
                        <p id="days" className="big-text mt-5">
                        {timeRemaining.days}
                        </p>
                        <span>Days</span>
                    </div>
                    <div id="time-box" >
                        <p id="hours" className="big-text mt-5">
                        {timeRemaining.hours}
                        </p>
                        <span>Hours</span>
                    </div>
                     <div id="time-box">
                        <p id="min" className="big-text mt-5">
                        {timeRemaining.minutes}
                        </p>
                        <span>Min</span>
                    </div>
                    <div id="time-box">
                        <p id="sec" className="big-text mt-5">
                        {timeRemaining.seconds} 
                        </p>
                        <span>Sec</span>
                    </div>
                </div>
            </div>
        </div>

    </>
}

