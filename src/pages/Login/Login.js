import React from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'

const Login = () => {

    const { signInUsingGoogle } = useFirebase();


    return (
        <div className='min-h-[33vh] p-4 '>
            <div className='container mx-auto p-8 shadow-lg rounded-xl max-w-sm my-16 mx-auto'>
                <h3 className="text-3xl w-full mb-6">
                    Login
                </h3>
                <form >
                    <label htmlFor="">Email</label> <br />
                    <input type="text"  className='h-12 border rounded-md mb-4 w-full' /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password"  className='h-12 border rounded-md w-full' /> <br />
                    <small className='text-[#19D3AE] '><Link>Forgot Password?</Link></small> <br />
                    <input type="submit" className='w-full h-12 mb-4 btn mt-4' value='Submit'/>
                    <p>Don't have an account? <Link to='/register' className='text-[#19D3AE]'> Create new account</Link></p>
                    <div className="divider">or</div>

                    <button className="btn btn-outline w-full" onClick={signInUsingGoogle}>Continue with google</button>
                </form>

            </div>
        </div>
    )
}

export default Login