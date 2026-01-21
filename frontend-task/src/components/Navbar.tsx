import { useState,useEffect } from "react";
const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme =="dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // const toggleTheme= ()=>{
  //   setDarkMode((prev)=>{
  //     const newMode= !prev;
  //     if (newMode) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //     return newMode;
  //   });
  // };

  return (
    <nav className="w-full bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Swift Shop</h1>
      {/* <button className="text-lg border-2 bg-gray">change mode</button> */}
      
      {/* <button
        onClick={toggleTheme}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button> */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="cursor-pointer hover:text-slate-300">Dashboard</li>
        <li className="cursor-pointer hover:text-slate-300">Product</li>
        <li className="cursor-pointer hover:text-slate-300">Inventory</li>
      </ul>
    </nav>
  );
};

export default Navbar;

