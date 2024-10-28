import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='flex items-center justify-center w-full max-w-md mx-auto flex-col p-4 m-2 rounded bg-slate-200'>
     <img src ={SUCCESSIMAGE} alt=''
     />
     <p className='text-green-700 font-bold text-3xl'>Payment succesfull</p>
     <Link to={"/order"} className='p-2 my-5 px-3 rounded font-semibold border-2 border-green-600 text-green-500 hover:bg-green-400 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success
