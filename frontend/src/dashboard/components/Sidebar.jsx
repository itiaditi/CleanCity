import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminRoutes from '../../Routes/AdminRoutes';

function Sidebar() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="py-4 px-6">
          <NavLink to="/">
           <h1 className='text-3xl'>Clean City</h1>
          </NavLink >
        </div>

        <div className="mb-10">
          <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">Main</h3>
          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </NavLink >

          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            Most recommended
          </NavLink >

          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Most commented
          </NavLink >
        </div>

        <div className="mb-10">
          <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">Library</h3>
          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            Favorites
          </NavLink >

          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Watch later
          </NavLink >

          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2l1 2h13l1-2h2m-4 0a1 1 0 011 1v4a1 1 0 01-1 1h-3v3a1 1 0 01-1 1H9a1 1 0 01-1-1v-3H5a1 1 0 01-1-1v-4a1 1 0 011-1m4 0V7a4 4 0 118 0v3"></path>
            </svg>
            History
          </NavLink >
        </div>

        <div className="mb-10">
          <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">Menu</h3>
          <NavLink to="/" className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg
              className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 0118 0 9 9 0 01-18 0zm9 4v.01M12 8h.01M12 16v.01M16 12h.01M8 12h.01M12 12h.01"></path>
            </svg>
            Menu Item
          </NavLink >
        </div>
      </div>
      <div>
        <AdminRoutes/>
      </div>
    </div>
  );
}

export default Sidebar;
