// ==============================
// Custom Hooks in React (customHooks.js)
// ==============================

// ------------------------------
// 1. What is a Custom Hook?
// ------------------------------
// A custom hook is simply a JavaScript function 
// that starts with "use" and allows us to reuse logic 
// between multiple components.

// Example: useCounter Hook
import { useState, useEffect } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// ------------------------------
// 2. useFetch Hook (Data Fetching)
// ------------------------------
// Custom hooks can also handle API calls and reusability.

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// ------------------------------
// 3. useLocalStorage Hook
// ------------------------------
// A custom hook for persisting state in localStorage.

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// ------------------------------
// 4. useToggle Hook
// ------------------------------
// Simple hook to toggle boolean values.

export function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
}

// ------------------------------
// 5. Rules of Hooks (Important)
// ------------------------------
// ✅ Always start hook names with "use".
// ✅ Only call hooks at the top level of your components or custom hooks.
// ✅ Never call hooks inside loops, conditions, or nested functions.
// ✅ Hooks must only be called inside React function components or custom hooks.

// ------------------------------
// 6. Using Custom Hooks in Components
// ------------------------------

import React from "react";
import { useCounter, useFetch, useToggle } from "./customHooks";

function App() {
  const { count, increment, decrement, reset } = useCounter(5);
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <h1>Custom Hooks Demo</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <h2>Toggle: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggleIsOn}>Toggle</button>

      <h2>Fetch Example:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;


// ==============================
// END OF FILE
// ==============================
