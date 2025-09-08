import React, { createContext, useContext } from "react";

// 1️⃣ Create a Context (like a global storage)
const ThemeContext = createContext();

// 2️⃣ Create a component that provides context
function ThemeProvider({ children }) {
  const theme = "dark"; // This value will be shared to all children
  return (
    // Provide the value to children components
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ A component that consumes the context using useContext
function ThemedButton() {
  // useContext helps to access ThemeContext value directly
  const theme = useContext(ThemeContext);

  return (
    <button>
      {/* Using the theme value from context */}
      Current theme is: {theme}
    </button>
  );
}

// 4️⃣ Main App
export default function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
