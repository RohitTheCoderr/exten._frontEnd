import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className=" h-screen flex justify-center items-center text-white font-sans">
        <div className="text-center p-8 w-[80%]">
          <h1 className="text-6xl font-extrabold mb-4 text-indigo-800">
            Welcome to the Lead Management System
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            A powerful platform for managing, tracking, and organizing your leads efficiently.
          </p>
          <Link to="/lead_management">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Create Lead
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
