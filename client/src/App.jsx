import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route: if logged in, show Home; otherwise go to Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Home onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Login page */}
        <Route
          path="/login"
          element={
            <Login
              onLogin={() => {
                setIsAuthenticated(true);
              }}
            />
          }
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={
            <Signup
              onSignup={() => {
                setIsAuthenticated(false); // or navigate to login
              }}
            />
          }
        />

        {/* Catch-all route (optional): redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
