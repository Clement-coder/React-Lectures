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
    <div className='text-center px-4 md:px-6 py-8 text-black'>
    {/* Top buttons */}
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mx-auto'>
      <h1 className='bg-yellow-100 py-2 px-6 rounded-full text-xl font-bold'>
        StopWatch
      </h1>
      <h1 className='bg-gray-300 py-2 px-6 rounded-full text-xl font-bold'>
        Timer
      </h1>
    </div>
  
    {/* Timer Display */}
    <div className='mt-20 md:mt-32'>
      <h2 className='text-5xl md:text-7xl font-semibold'>
        <span>{String(hours).padStart(2, '0')}</span> :
        <span>{String(minutes).padStart(2, '0')}</span> :
        <span>{String(seconds).padStart(2, '0')}</span>
      </h2>
    </div>
  
    {/* Action Buttons */}
    <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-12'>
      <button
        onClick={handleReset}
        className='bg-gradient-to-r from-teal-400 to-teal-800 rounded-full shadow-md mt-4 sm:mt-0 text-white px-8 py-4 text-lg font-medium hover:scale-105 transition-transform duration-200'
      >
        Reset
      </button>
  
      <button
        onClick={handleStart}
        className='bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-full shadow-md mt-4 sm:mt-0 text-white px-8 py-4 text-lg font-medium hover:scale-105 transition-transform duration-200'
      >
        Start
      </button>
    </div>
  </div>
  
  );
};

export default Timer;

