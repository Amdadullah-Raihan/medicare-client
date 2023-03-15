import React from 'react'

const NotFound = () => {
  return (
    <div className='container mx-auto min-h-[33vh] flex justify-center items-center flex-col'>
        <h1 className="text-8xl text-red-400 font-bold text-shadow">404!</h1>
          <h4 className='text-3xl mt-6'><span className='text-red-400'>Oops!</span> The page you're looking for was not found!</h4>
    </div>
  )
}

export default NotFound