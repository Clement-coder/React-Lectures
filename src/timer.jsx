import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isStart, setIsStart] = useState(false);

    useEffect(() => {
    let interval;

    if (isStart) {
      interval = setInterval(() => {
        setSeconds(prevSec => {
          if (prevSec === 59) {
            setMinutes(prevMin => {
              if (prevMin === 59) {
                setHours(prevHr => prevHr + 1);
                return 0;
              } else {
                return prevMin + 1;
              }
            });
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1000);
    }

  
    return () => clearInterval(interval);
  }, [isStart]);

  const handleStart= () =>{
    setIsStart(true)
  }


const handleReset = () => {
  setSeconds(0);
  setMinutes(0);
  setHours(0);
  setIsStart(false); 
};

  return (
    <div className='text-center p-6   text-black'>
      <button className='flex items-center gap-24 justify-center mx-auto  text-center bg-gray-200 rounded-full py-2 px-4'>
      <h1 className='bg-yellow-100  py-2 px-4 rounded-full text-xl font-bold mb-4 '>
         StopWatch</h1>
      <h1 className='bg-gray-300 py-2 px-4 rounded-full text-xl font-bold mb-4'>
        Timer</h1> 

      </button>
  <div className='mt-40 '>
  <h2 className='text-7xl font-medium mb-4'>
        <span className=''>
        {String(hours).padStart(2, '00')}</span> :
        <span className=''>
        {String(minutes).padStart(2, '0')}</span> :
        <span className=''>
        {String(seconds).padStart(2, '0')}</span>
      </h2>
  </div>

  <div className='flex items-center text-center justify-center gap-8'>
        
  <button
        onClick={handleReset}
        className='bg-gradient-to-r from-teal-400 to-teal-800 rounded-full  shadow-lg shadow-gray-900 mt-10 text-white px-6 text-lg font-medium py-8  hover:bg-teal-600 transition'
      >
        Reset
      </button>
      <button
        onClick={handleStart}
        className='bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-full shadow-lg shadow-gray-900 mt-10 text-white px-6 text-lg font-medium py-8  hover:bg-teal-600 transition'
      >
        Start
      </button>
  </div>
    </div>
  );
};

export default Timer;

