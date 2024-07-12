import React, { useState } from "react";

function Nav() {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  return (
    <nav className="w-full bg-blue-900 p-1 nav-header ">
      <div className="flex items-center justify-between">
        <div className=" pl-2 text-white text-2xl font-bold">Betagro</div>

        {/* Toggle menu bottom */}
        <div className=" md:hidden">
          <button id="menu-toggle" className=" text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className=" w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/" className="text-white text-base font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="/qscore" className="text-white text-base font-bold">
              Qscore
            </a>
          </li>
          <li>
            <a href="/users" className="text-white text-base font-bold">
              Users
            </a>
          </li>
          <li>
            <a href="/support" className="text-white text-base font-bold">
              Support
            </a>
          </li>

          <li>
            <details>
              <summary className="text-white text-xl">
                <a href="/sign-in" className="text-white text-base font-bold">
                  | Sign In
                </a>
              </summary>
              <ul className="p-3 bg-blue-900 rounded-t-none ">
                <li>
                  <a href="/register" className="text-white text-sm">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/logout" className="text-white text-sm">
                    Log Out
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      {/* {isMenuopen ?(
            <ul className='flex-col md:flex'>
                    <li className='py-2'><a href='/' className='text-white text-xl'>Home</a></li>
                    <li className='py-2'><a href='/q-score' className='text-white text-xl'>Qscore</a></li>
                    <li className='py-2'><a href='/user' className='text-white text-xl'>UserMangement</a></li>
                    <li className='py-2'><a href='/sign-in' className='text-white text-xl'>Sign In</a></li>
                </ul>
            ): null} */}
    </nav>
  );
}

export default Nav;