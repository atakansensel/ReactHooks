import { useState, useEffect } from 'react';

function Counter() {
   const [count,setCounter] = useState(0);
   const [username,setUserName] = useState("Atakan")

   useEffect(()=>{
    console.log(count);

    return () => {
        // Cleanup subscription
        console.log("ssssss");
    };
   },[count]);

  const Increment=()=>{
    setCounter(count+1);
  }

  const Decrement=()=>{
    setCounter(count-1);
  }
  
  const handleOnChange=(event)=>{
    setUserName(event.target.value);
  }
  return (
    <div>
      <p>{username}</p>
      <input value={username} onChange={handleOnChange}></input>
      <p>{count}</p>
      <button onClick={Increment}>
        +
      </button>
      <button onClick={Decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;