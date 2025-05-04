import { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      setMessage(res.data.message);
      onLogin(); // Go to home/dashboard
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-80 space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded">
          Login
        </button>
        {message && <p className="text-sm text-center text-red-400">{message}</p>}
      </form>
    </div>
  );
}
