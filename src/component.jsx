
import React, {react, useState} from 'react';


const component = () => {

    const [name ,setName] = useState ("Guess")
    const [age ,setAge] = useState (0)
    const changeName = () => {
        setName("Clement Raymond")
    }

    const changeAge = () =>{
        setAge((prevAge) => prevAge+1)
    }
    const reduceAge = () =>{
        setAge((prevAge) => prevAge-1)
    }
    const resetAge = () =>{
        setAge(0)
    }
    const changeAgeFive = () =>{
        setAge((prevAge) => prevAge+5)
    }
    
  return (
    <div className='text-center '> 
     <p className='py-6'>Name : <span className='text-teal-500'>{name}</span></p>
     <p className='py-6'>Age : <span className='text-teal-500'>{age}</span></p>
     <button onClick={changeName} className='text-xl bg-teal-500 border border-black rounded-md py-3 px-5'>Update name</button>
     <br />
     <button onClick={changeAge} className='text-xl bg-teal-500 border mt-4 border-black rounded-md py-3 px-5'>Update age</button>
      <br />
     <button onClick={reduceAge} className='text-xl bg-teal-500 border mt-4 border-black rounded-md py-3 px-5'>Reduce age</button>
     <br />
     <button onClick={resetAge} className='text-xl bg-teal-500 border mt-4 border-black rounded-md py-3 px-5'>Reset age</button>
     <br />
     <button onClick={changeAgeFive} className='text-xl bg-teal-500 border mt-4 border-black rounded-md py-3 px-5'>Update age 5</button>
   
    </div>
  )
}

export default component
