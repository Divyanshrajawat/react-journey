// ================================
// 1️⃣ IMPORTS: React + Redux Toolkit + React-Redux
// ================================
import React, { useState } from "react";
// React Redux bindings
import { Provider, useDispatch, useSelector } from "react-redux";
// Redux Toolkit provides createSlice, configureStore and uses Immer internally
import { configureStore, createSlice } from "@reduxjs/toolkit";

// ================================
// 2️⃣ CREATE A SLICE: defines state + reducers (logic)
// ================================
// createSlice internally uses Immer library, so we can "mutate" state directly (it actually produces immutable updates under the hood)
const counterSlice = createSlice({
  name: "counter", // name of the slice (appears in Redux DevTools)
  initialState: {
    value: 0, // initial counter value
  },
  reducers: {
    // Action: increment by 1
    increment: (state) => {
      // thanks to Immer, we can mutate
      state.value += 1;
    },
    // Action: decrement by 1
    decrement: (state) => {
      state.value -= 1;
    },
    // Action: increment by custom amount (payload)
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // Action: decrement by custom amount (payload)
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Export action creators for dispatching
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

// ================================
// 3️⃣ CREATE STORE: holds all slices / global state
// ================================
const store = configureStore({
  reducer: {
    // we can combine multiple slices here, but now we only have one
    counter: counterSlice.reducer,
  },
});

// ================================
// 4️⃣ COUNTER COMPONENT: UI + dispatching actions
// ================================
// useSelector → read state
// useDispatch → trigger actions to update state
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  // local state for custom input
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🧮 Redux Toolkit Counter</h1>
      <h2>Value: {count}</h2>

      {/* Increment and Decrement by 1 */}
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <br /><br />

      {/* Increment / Decrement by Custom Amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by {amount}
      </button>
      <button onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement by {amount}
      </button>
    </div>
  );
};

// ================================
// 5️⃣ APP COMPONENT: wrap the whole app in Provider
// ================================
// Provider gives access to the Redux store to the entire React component tree
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

/*
=================================
📚 SUMMARY / CHEAT SHEET
=================================
👉 createSlice()
   - Combines action creators + reducer logic
   - Uses Immer internally → you can write state mutations easily

👉 configureStore()
   - Creates the Redux store
   - Accepts reducers (one or many slices)
   - Sets up Redux DevTools automatically

👉 useSelector()
   - Reads values from Redux state

👉 useDispatch()
   - Returns dispatch function to trigger actions

👉 dispatch(actionCreator(payload))
   - Updates the state in the store

👉 Provider
   - Wraps React app to provide store to components

✅ This example shows:
   - Increment/Decrement by 1
   - Increment/Decrement by custom value entered
   - Single file structure for revision later
*/
