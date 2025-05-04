import { useState } from "react";

export default function RegistrationForm({ games }) {
  const [form, setForm] = useState({ name: "", email: "", game: games[0].name });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered ${form.name} for ${form.game}`);
    setForm({ name: "", email: "", game: games[0].name });
  };

  return (
    <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register for a Game</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <select
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          value={form.game}
          onChange={(e) => setForm({ ...form, game: e.target.value })}
        >
          {games.map((g) => (
            <option key={g.name}>{g.name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
