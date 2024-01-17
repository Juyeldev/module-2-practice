import { useRef, useState } from "react";


const UseRefExample = () => {
const [count, setCount]= useState(0)
    const myRef= useRef(0);

    const increment=()=>{
        myRef.current=myRef.current +1
        setCount(count+1)
        console.log("stat=>", count);
        console.log("Ref+>", myRef.current);
    }

    return (
        <div className="text-2xl" >
            UseRef
            <button onClick={()=> increment()}> {myRef.current} </button>
        </div>
    );
};

export default UseRefExample;