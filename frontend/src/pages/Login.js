import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
const [showPassword,setShowPassword]=useState(false)
const [data,setData]=useState({
   email :"",
   password:"",
   
})

const navigate=useNavigate()
const {fetchUserDetails,fetchUserAddToCart}=useContext(Context)


const handleOnChange =(e)=>{
  const{name,value}=e.target

  setData((preve)=>{
    return{
      ...preve,
      [name]:value
    }

  })


}
const handleSubmit =async(e)=>{
    e.preventDefault()

    const dataResponse=await fetch(SummaryApi.signIn.url,{
      method:SummaryApi.signIn.method,
      credentials :'include',
      headers:{
        "content-type":"application/json"

      },
      body:JSON.stringify(data)

    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
      navigate("/")
      fetchUserDetails()
      fetchUserAddToCart()

    }
    if(dataApi.error){
      toast.error(dataApi.message)
    }
}
console.log('login data',data)

  return (
  <section id='login'>
    <div className='mx-auto container p-4'>
<div className='bg-violet-50 p-4 w-full max-w-sm mx-auto rounded'>
<div className='w-20 h-20 mx-auto'>
    <img src={loginIcons} alt='Login'/>
</div>

{/* Form Starts  */}
<form className='pt-10 flex flex-col gap-3'onSubmit={handleSubmit}>

{/* Email */}
    <div className='grid'>
    <label> Email :</label>
    <div className='bg-slate-100 p-2'> 
    <input
     type='email' 
     name ='email'
     onChange={handleOnChange}
     value={data.email}
     required
     placeholder='Enter Your Email' 
     className='w-full h-full outline-none bg-transparent'

     />
    </div>
   
    </div>

{/* Password */}
    <div>
    <label> Password :</label>
    <div className='bg-slate-100 p-2 flex'>
    <input 
    type={showPassword ? "text" : "password"} 
    name='password'
    onChange={handleOnChange}
    value={data.password}
    placeholder='Enter Your Password' 
    required
    className='w-full h-full outline-none bg-transparent'

    />

    <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
    <span>
    {
      showPassword ? (
        <FaEyeSlash/>
      )
      :
      (
       <FaEye/>

      )
    }
     
      </span>
    </div>

    </div>
    <Link to={'/forgot-password'} className='w-fit block ml-auto hover:underline hover:text-red-400'>Forgot Password?</Link>
    </div>

    {/* Login Button */}
    <button  className="bg-cyan-700 hover:bg-red-700 text-white font-semibold py-2 px-4 border w-full max-w-[150px] border-red-800 rounded-full hover:scale-110 transition-all mx-auto block mt-6 ">
 Login
</button>
</form>

<p className='my-5'>Don't Have Account ? <Link to ={"/sign-up"} className='hover:text-red-600 hover:underline text-cyan-800'>Sign Up</Link></p>

{/* Form Ends */}

</div>
    </div>
  </section>
  )
}

export default Login
