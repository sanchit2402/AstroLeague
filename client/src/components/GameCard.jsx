export default function GameCard({ game }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <img src={game.img} alt={game.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{game.name}</h2>
      </div>
    </div>
  );
}
