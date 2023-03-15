import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assests/logo.png';




const Header = () => {




  return (
     <div >
          <nav className="navbar bg-base-100 container mx-auto py-4">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                              <NavLink
                                  to="/"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  Home
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                  to="/about-us"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  About Us
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                  to="/appointments"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  Apointments
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                  to="/reviews"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  Reviews
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                  to="/contact-us"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  Contact Us
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                  to="/Login"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active" : ""
                                  }
                              >
                                  Login
                              </NavLink>
                        </li>
                      </ul>
                  </div>
                  <Link to='/' className='text-4xl font-bold text-[#3A4256]' >MediCare</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      <li>
                          <NavLink
                              to="/"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              Home
                          </NavLink>
                      </li>
                      <li>
                          <NavLink
                              to="/about-us"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              About Us
                          </NavLink>
                      </li>
                      <li>
                          <NavLink
                              to="/appointments"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              Apointments
                          </NavLink>
                      </li>
                      <li>
                          <NavLink
                              to="/reviews"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              Reviews
                          </NavLink>
                      </li>
                      <li>
                          <NavLink
                              to="/contact-us"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              Contact Us
                          </NavLink>
                      </li>
                      <li>
                          <NavLink
                              to="/login"
                              className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                              }
                          >
                              Login
                          </NavLink>
                      </li>
                  </ul>
              </div>
              <div className="navbar-end">
                  <a className="btn">Get started</a>
              </div>
          </nav>
     </div>
  )
}

export default Header