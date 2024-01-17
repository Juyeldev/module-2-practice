import React from 'react';

type TU={
    counter: number,
    setCounter:React.Dispatch<React.SetStateAction<number>>
}
const UseStateExmp = ({ counter, setCounter}:TU) => {

   const handleInc=() => {
    setCounter((prev)=> prev+1)
   }
   const handleDec=() => {
    setCounter((prev)=> prev-1)
   }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleInc}>increment</button>
            <button onClick={handleDec}>decrement</button>
            
        </div>
    );
};

export default UseStateExmp;