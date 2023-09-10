import { useState, useEffect } from 'react';

const Timer=()=> {
  const [timeLeft, setTimeLeft] = useState(16400); // 24 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='timeCount' style={{color: 'red',paddingLeft:"1vw"}}>
      Time remaining: {hours}h {minutes}m {seconds}s
    </div>
  );
}

export default Timer;
