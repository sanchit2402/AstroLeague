import logo from '../assets/astro-league-logo.png';

const Header = () => (
  <header className="flex flex-col items-center justify-center py-6 bg-gradient-to-b from-purple-900 to-black text-white">
    <img src={logo} alt="Astro League Logo" className="w-32 md:w-48 mb-3" />
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
      ASTRO-LEAGUE
    </h1>
    <p className="text-gray-300 mt-1">Where Gamers Compete Among Stars 🚀</p>
  </header>
);

export default Header;
