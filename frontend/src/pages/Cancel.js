import React from 'react'
import CANCELIMAGE from '../assest/cancel.gif'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-full max-w-md mx-auto flex-col p-4 m-2 rounded'>
     <img src ={CANCELIMAGE} alt=''
     height={150}
     width={150}
     className='mix-blend-multiply'
     />
     <p className='text-red-500 font-bold text-3xl mt-5'>Payment Cancel</p>
     <Link to={"/cart"} className='p-2 my-5 px-3 rounded font-semibold border-2 border-red-600 text-red-500 hover:bg-red-500 hover:text-white'>Go To Cart</Link>
    </div>
    </div>
  )
}

export default Cancel
