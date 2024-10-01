import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">MapApp</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/maps">
              <button className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Maps
              </button>
            </Link>
            <Link to='/coordinates'>
              <button className="px-4 py-2 font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Coordinates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
