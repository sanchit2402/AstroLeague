import GameCard from "../components/GameCard";
import RegistrationForm from "../components/RegistrationForm";

export default function Home({ onLogout }) {
  const games = [
    { name: "Valorant", img: "/images/valorant.jpg" },
    { name: "PUBG", img: "/images/pubg.jpg" },
    { name: "Call of Duty", img: "/images/cod.jpg" },
    { name: "Fortnite", img: "/images/fortnite.jpg" },
    { name: "Apex Legends", img: "/images/apex.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header with Logo and Astro-League Name */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Astro-League Logo" className="w-14 h-14 rounded-full shadow-md" />
          <div>
            <h1 className="text-4xl font-extrabold text-blue-400">Astro-League</h1>
            <p className="text-sm italic text-gray-400">"Where Gamers Reach for the Stars"</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Game Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>

      {/* Registration Form */}
      <RegistrationForm games={games} />
    </div>
  );
}
