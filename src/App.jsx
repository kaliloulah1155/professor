import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from './layouts/Navbar'
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Dashboard } from './components/Dashboard';
import { isAuthenticated } from "./helpers/Auth_guard";
 


// Define a custom route component for protected routes


function App() {

  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto md:h-screen lg:h-auto overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

      </div>
    </div>
  )
}

export default App
