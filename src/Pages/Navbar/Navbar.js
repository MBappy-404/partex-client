import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assetes/Images/Furniture-Logo.png'

const Navbar = () => {
     const [navbar, setNavbar] = useState(false);
 
     return (
          <div>
              
              <div className='sticky top-0   bg-gray-400 z-50'>
               <nav className="w-full sticky top-0 z-50">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                         <div>
                              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                   <a href=" ">
                                        <h2 className="text-2xl font-bold text-white"> <img src={logo} className='w-52' alt="" /> </h2>
                                   </a>
                                   <div className="md:hidden">
                                        <button
                                             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                             onClick={() => setNavbar(!navbar)}
                                        >
                                             {navbar ? (
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                  </svg>
                                             ) : (
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M418h16"/>
                                                  </svg>
                                             )}
                                        </button>
                                   </div>
                              </div>
                         </div>

                         <div className='text-center'>
                              <div
                                   className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                                   <ul className="items-center bg-none  rounded-lg   lg:bg-none p-10 md:p-0 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                        <li className="text-white ml-0 lg:ml-2 hover:text-indigo-200">
                                             <Link to="/home">Home</Link>
                                        </li>
                                        
                                        <li className="text-white hover:text-indigo-200">
                                             <a href=" "><Link to='/about'>About</Link></a>
                                        </li>
                                        <li className="text-white hover:text-indigo-200">
                                             <a href=" "><Link to='/dashboard'>Dashboard</Link></a>
                                        </li>
                                        <li className="text-white hover:text-indigo-200">
                                             <Link to="/blog">Blogs</Link>
                                        </li>
                                        <li className="text-white hover:text-indigo-200">
                                             <a href=" "><Link to='/contact'>Contact</Link></a>
                                        </li>
                                        <li className="text-white hover:text-indigo-200">
                                             <a href=" "><Link to='/signUp'>Sign Up</Link></a>
                                        </li>
                                         
                                   </ul>
                              </div>
                         </div>
                    </div>
               </nav>
          </div>

 
          </div>
     );
};

export default Navbar;