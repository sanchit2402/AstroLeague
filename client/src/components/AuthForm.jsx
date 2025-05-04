import { useState } from "react";

export default function AuthForm({ onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = localStorage.getItem("user");
      if (user && JSON.parse(user).email === form.email && JSON.parse(user).password === form.password) {
        onSuccess();
      } else {
        alert("Invalid credentials");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Signup successful!");
      onSuccess();
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl w-full max-w-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
