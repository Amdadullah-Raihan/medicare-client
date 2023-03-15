import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='min-h-[33vh]'>
            <div className='container mx-auto p-8 shadow-lg rounded-xl max-w-sm my-16'>
                <h3 className="text-3xl w-full mb-6">
                    Login
                </h3>
                <form action="" className=''>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" name="" id="" className='h-12 border rounded-md mb-4 w-full' /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name="" id="" className='h-12 border rounded-md w-full' /> <br />
                    <small className='text-[#19D3AE] '><Link>Forgot Password?</Link></small> <br />
                    <button className="btn rounded-md w-full mt-4 mb-4">login</button>
                    <p>Don't have an account? <Link to='register' className='text-[#19D3AE]'> Create new account</Link></p>
                    <div className="divider">or</div>

                 <button className="btn btn-outline w-full">Continue with google</button>
                </form>

            </div>
        </div>
    )
}

export default Login