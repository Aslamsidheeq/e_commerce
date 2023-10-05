import { useState, useEffect } from 'react';

const Timer=()=> {
  const [timeLeft, setTimeLeft] = useState(16400); // 4 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000); //setInterval to decrement time left by 1 everysecond

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600); //round to nearest integer
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='timeCount' style={{color: 'red',paddingLeft:"1vw"}}>
      Time remaining: {hours}h {minutes}m {seconds}s
    </div>
  );
}

export default Timer;
