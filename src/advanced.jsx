import React, {useEffect, useState} from 'react';

const Advanced = () => {
    const[products, setProducts] =useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
        console.log(products)
    },[]);
  return (
    <div className='text-center justify-center items-center'>
      <h1 className='text-xl '>My products</h1>
      <ul className='text-left'>
      {products.map((item) => (
        <li 
        className='py-3  shadow-md max-w-3xl  mt-5' 
        key={item}
        >
        {item.title}
        </li>
      ))};
      </ul>
    <span>
        <button ></button>
    </span>

    </div>
  )
};

export default Advanced

//import React, {useEffect, useState} from "react"

// const advanced = () => {
//     const[count, setCount] = useState(0)
//     useEffect(() => {
//         console.log("count change", count)
//     },[count]);
//   return (


//     <div>
//       <h1 className="text-xl ">Count is <span className="text-teal-500"> {count}</span> </h1>
//       <button onClick={() => setCount(count + 1)} className="py-2 px-4 bg-teal-500 border border-black">Update count</button>
//     </div>
//   )
// }

// export default advanced
 