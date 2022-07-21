import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App text-slate-900 flex flex-col w-screen min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
