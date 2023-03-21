import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assests/logo.png';
import useFirebase from '../../../hooks/useFirebase';




const Header = () => {
    const { user, handleLogOut } = useFirebase();
    console.log(user);

    // handle sign out
    const handleSignOut = () => {
        handleLogOut()
    }
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

                        </ul>
                    </div>
                    <div className='relative '>
                        <div className="absolute h-full mt-2 md:h-12 md:mt-0 w-full z-0  bg-gradient-to-r to-[#19D3AE] from-[#0FCFEC]  opacity-30 ml-2 "></div>
                        <Link to='/' className='relative z-10 lg:text-3xl text-2xl md:text-3xl font-bold text-[#3A4256] text-white   px-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] ' >MediCare</Link>
                    </div>

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

                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user?.email ? <div className="dropdown dropdown-end ">

                            <label tabIndex={0} className="btn border-none p-0 bg-white w-12 ml-3 rounded-full">
                                <img src={user.photoURL} alt="user" className='rounded-full w-full' />
                            </label>

                            {/* profile dropdown  */}

                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-64 bg-slate-50  mt-5 ">
                                <img src={user.photoURL} alt="user" className='rounded-full w-[60%] mx-auto border-teal-500 border-2 my-4' />
                                <h3 className='text-center'>{user.displayName}</h3>
                                <div className="divider"></div>
                                <li className='hover:bg-teal-100'>
                                    <Link to='/dashboard'>
                                        <span className="material-symbols-outlined text-teal-500">
                                            dashboard
                                        </span>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className='hover:bg-teal-100'>
                                    <Link to='/my-appointments'>
                                        <span className="material-symbols-outlined text-teal-500">
                                            shopping_cart
                                        </span>
                                        My Appoinments
                                    </Link>
                                </li>
                                <li className='hover:bg-teal-100'>
                                    <button onClick={handleSignOut}>
                                        <span className="material-symbols-outlined text-teal-500">
                                            logout
                                        </span>
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div> :


                            <NavLink

                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "btn px-6 btn-outline border-teal-500 border-2"
                                }
                            >
                                Login
                            </NavLink>

                    }


                </div>
            </nav>
        </div>
    )
}

export default Header