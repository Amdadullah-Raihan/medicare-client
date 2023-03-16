import React, { Children } from 'react'

const PrimaryButton = ({children}) => {
    return <button className='btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none'>{children}  </button>
}

export default PrimaryButton