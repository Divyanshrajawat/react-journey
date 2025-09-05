import React, { useRef, useEffect, useState } from "react";

function UseRefExample() {
  // useRef is used to keep a reference to a DOM element or a mutable value
  const inputRef = useRef(null);

  // useState to keep count
  const [count, setCount] = useState(0);

  // useEffect runs after the component renders
  useEffect(() => {
    console.log("Component mounted ✅");

    // Focus on input box automatically when component loads
    inputRef.current.focus();

    // Cleanup function (runs when component unmounts)
    return () => {
      console.log("Component unmounted ❌");
    };
  }, []); // empty array -> runs only once

  // Function to increase count
  const increaseCount = () => {
    setCount(count + 1);

    // useRef.current is like a direct reference → we can manipulate DOM
    inputRef.current.style.backgroundColor = "lightyellow";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useRef + useEffect Example</h2>

      {/* input with ref */}
      <input
        ref={inputRef} // attaching reference
        type="text"
        placeholder="Type something..."
      />

      <h3>Count: {count}</h3>

      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default UseRefExample;
