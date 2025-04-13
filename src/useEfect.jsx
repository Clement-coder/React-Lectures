import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("orange")

    useEffect(() => {
        document.title = `Counter App ${count}`;

    },[count])
    const updateNum = () => {
        setCount(count +1)

    }

    const changeColor = () => {
        setColor((prevColor) => prevColor === "orange" ? "red" : "Orange" );
    }

  return (
    <div className="mt-20 text-center my-10">
        <p className="py-6">        Updating Number
        </p>
        <h1 className="text-xl">My Colors : <span 
        style={{color}}>{color}</span></h1>
      <h2 className="text-lg py-2">Count : <span className="text-teal-500">{count}</span></h2>
    <button className="text-xl bg-teal-500 py-3 px-5 border border-black rounded-xl" onClick={updateNum}>Add Count</button>
    <br />
    <button className="text-xl mt-4 bg-teal-500 py-3 px-5 border border-black rounded-xl" onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Counter;
