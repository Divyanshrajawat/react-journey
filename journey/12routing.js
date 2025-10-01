// ==========================================
// React Router Examples in One File
// ==========================================
// Import required libraries
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

// ==========================================
// Home Component
// ==========================================
function Home() {
  return <h2>🏠 Home Page</h2>;
}

// ==========================================
// About Component
// ==========================================
function About() {
  return <h2>ℹ️ About Page</h2>;
}

// ==========================================
// Contact Component
// ==========================================
function Contact() {
  return <h2>📞 Contact Page</h2>;
}

// ==========================================
// Dynamic Routing Example
// ==========================================
function UserProfile() {
  const { id } = useParams(); // get parameter from URL
  return <h2>👤 User Profile for ID: {id}</h2>;
}

// ==========================================
// Nested Routing Example
// ==========================================
// Parent Component
function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

// Child Components
function Stats() {
  return <h3>📈 Dashboard Stats</h3>;
}

function Settings() {
  return <h3>⚙️ Dashboard Settings</h3>;
}

// ==========================================
// Redirect / Navigation Example
// ==========================================
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After login redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>🔐 Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// ==========================================
// 404 Page Not Found Example
// ==========================================
function NotFound() {
  return <h2>❌ 404 - Page Not Found</h2>;
}

// ==========================================
// App Component with All Routes
// ==========================================
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/123">User Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <hr />

      <Routes>
        {/* Basic Routing */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Routing */}
        <Route path="/user/:id" element={<UserProfile />} />

        {/* Nested Routing */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Redirect / Navigation */}
        <Route path="/login" element={<Login />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// ==========================================
// Render App
// ==========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
