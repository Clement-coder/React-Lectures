import React, { useState } from 'react'

const object = () => {

  
        const[user, setUser] = useState ({
            name: 'Clement Raymond',
            age: 20
        });

        const updateAge = () => {
            setUser((prevUser) => ({
                ...prevUser,
                age: prevUser.age +1
            }));
        }

        // const [todos, setTodos] = useState9
    
  return (
    <div className='text-center mt-20'>
      <p className='text-xl py-4'>{user.name} is {user.age} years old</p>
      <button
      onClick={updateAge}
        className='text-md border border-black py-2 px-4 bg-teal-500 rounded-lg' >Update age</button>
    </div>
  )
};

export default object;
