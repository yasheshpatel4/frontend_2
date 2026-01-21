import { useState,useEffect } from "react";
const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="w-full bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Swift Shop</h1>
      
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="cursor-pointer hover:text-slate-300">Dashboard</li>
        <li className="cursor-pointer hover:text-slate-300">Product</li>
        <li className="cursor-pointer hover:text-slate-300">Inventory</li>
      </ul>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded font-semibold transition-colors duration-300 
          ${theme === "light" ? "bg-blue-500 text-white" : "bg-yellow-400 text-gray-900"}`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

