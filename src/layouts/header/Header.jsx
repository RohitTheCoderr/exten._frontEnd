// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuthStore } from "../../libs/zustand";

// function Header() {
//   const { removeToken, token } = useAuthStore((state) => state);
//   const isLoggedIn = !!token;

//   return (
//     <header className="flex justify-between px-8 md:px-16 items-center h-20 bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white shadow-lg">
//       {/* Logo Section */}
//       <div className="font-bold text-3xl cursor-pointer">
//         <Link to="/">🚀 Logo</Link>
//       </div>

//       {/* Navigation Section */}
//       <nav className="flex items-center gap-6">
//         <Link to="/" className="text-lg hover:text-fuchsia-200">
//           Home
//         </Link>
//         <Link to="/lead_list" className="text-lg hover:text-fuchsia-200">
//         Lead
//         </Link>

//         {isLoggedIn ? (
//           <button
//             onClick={() => removeToken()}
//             className="px-4 py-1 bg-red-600 hover:bg-red-700 rounded-sm text-white"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link
//             to="/login"
//             className="px-4 py-1 bg-green-600 hover:bg-green-700 rounded-sm text-white"
//           >
//             Login
//           </Link>
//         )}

//         <Link
//           to="/signUp"
//           className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded-sm text-white"
//         >
//           Sign Up
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from "../../libs/zustand";
import { Menu, X } from 'lucide-react';

function Header() {
  const { removeToken, token } = useAuthStore((state) => state);
  const isLoggedIn = !!token;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white shadow-lg">
      <div className="flex justify-between items-center h-20 px-6 md:px-16">
        {/* Logo Section */}
        <div className="font-bold text-3xl cursor-pointer">
          <Link to="/">🚀 Logo</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center gap-2 absolute md:static top-20 right-0 w-auto md:w-auto bg-fuchsia-500 md:bg-transparent z-10 p-4 md:p-0`}
        >
          <Link to="/" className="text-lg hover:text-fuchsia-200">
            Home
          </Link>
          <Link to="/lead_list" className="text-lg hover:text-fuchsia-200">
            Lead
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => {
                removeToken();
                setMenuOpen(false);
              }}
              className="px-4 py-1 bg-red-600 hover:bg-red-700 rounded-sm text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 bg-green-600 hover:bg-green-700 rounded-sm text-white"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}

          <Link
            to="/signUp"
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded-sm text-white"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

