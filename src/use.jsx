import React, { useState } from 'react'

const Use = () => {
    const [name, setName] = useState ('');
    const [location, setLocation] = useState ("Jos")
  return (

    <div className='justify-center text-center mt-20'>
      <input 
      className='border-gray-500 border py-2 rounded-md px-4 pl-2'
      type="text" 
      placeholder='Enter name '
      value={name}
      onChange={(e) => setName(e.target.value)}

      />
      <h1 className='text-xl py-9'>Hello <span className='text-teal-500'>{name}</span></h1>
      <h1 className='text-xl py-9'>Location <span className='text-teal-500'>{location}</span></h1>
      <button className='text-md border border-black py-2 px-4 bg-teal-500 rounded-lg' onClick={() => setLocation("Lagos")}>Change Location</button>
    </div>
  )
}

export default Use
