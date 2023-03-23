import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import AddDoctor from './DashboardPages/AddDoctor'
import AllUsers from './DashboardPages/AllUsers'
import ManageDoctors from './DashboardPages/ManageDoctors'

const Dashboard = () => {
    return (
        <div className='text-center flex'>
            <section className='relative'>
                <label htmlFor="my-drawer-2" className="drawer-button  lg:hidden">
                    <i class="fa-solid fa-bars ml-8"></i>
                </label>
                <div className="drawer drawer-mobile absoute">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">



                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li><Link to='all-users' >All Users</Link></li>
                            <li><Link to='add-a-doctor' >Add a Doctor</Link></li>
                            <li><Link to='manage-doctors' >Mange Doctors</Link></li>

                        </ul>

                    </div>
                </div>
            </section>
            <section className='bg-base-200 w-full py-8'>
                <Routes>
                    <Route path='all-users' element={<AllUsers />} />
                    <Route path='add-a-doctor' element={<AddDoctor />} />
                    <Route path='manage-doctors' element={<ManageDoctors />} />
                </Routes>
                <Outlet />
            </section>
        </div>
    )
}

export default Dashboard