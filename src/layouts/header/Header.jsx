import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from "../../libs/zustand";

function Header() {
  const { removeToken, token } = useAuthStore((state) => state);
  const isLoggedIn = !!token;

  return (
    <header className="flex justify-between px-8 md:px-16 items-center h-20 bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white shadow-lg">
      {/* Logo Section */}
      <div className="font-bold text-3xl cursor-pointer">
        <Link to="/">🚀 Logo</Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center gap-6">
        <Link to="/" className="text-lg hover:text-fuchsia-200">
          Home
        </Link>

        {isLoggedIn ? (
          <button
            onClick={() => removeToken()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-1 bg-green-600 hover:bg-green-700 rounded-sm text-white"
          >
            Login
          </Link>
        )}

        <Link
          to="/signUp"
          className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded-sm text-white"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
