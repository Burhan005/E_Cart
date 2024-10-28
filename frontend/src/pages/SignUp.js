import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
const [data,setData]=useState({
   email :"",
   password:"",
   name:"",
   confirmPassword:"",
   profilePic:""
   
})

const handleOnChange =(e)=>{
  const{name,value}=e.target

  setData((preve)=>{
    return{
      ...preve,
      [name]:value
    }

  })

}
const handleUploadPic =async(e)=>{
    const file =e.target.files[0]

    const imagePic=await imageTobase64(file)
    setData((preve)=>{
        return{
            ...preve,
            profilePic:imagePic

        }
    })
    
}
const navigate=useNavigate()

const handleSubmit =async(e)=>{
    e.preventDefault()

    if(data.password === data.confirmPassword){
      const dataResponse=await fetch(SummaryApi.signUp.url,{
        method:SummaryApi.signUp.method,
        headers:{
          "content-type":"application/json"
        },
        body :JSON.stringify(data)
      })
  
      const dataAPi=await dataResponse.json()

     if(dataAPi.success){
      toast.success(dataAPi.message)
      navigate("/login")
     }
     if(dataAPi.error){
      toast.error(dataAPi.message)
     }
    

    }else{
      toast.error("Passwords Dont Match")
    }  
}
  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>
<div className='bg-violet-50 p-4 w-full max-w-sm mx-auto rounded'>
<div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
    <div>
    <img src={data.profilePic || loginIcons} alt='Login'/>
    </div>
   <form>
   <label>
   <div className='text-xs bg-slate-500 text-white bg-opacity-80 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer'>
        Upload Photo
    </div>
    <input type='file' className='hidden' onChange={handleUploadPic}/>
   </label>
   
   </form>
</div>

{/* Form Starts  */}
<form className='pt-10 flex flex-col gap-3'onSubmit={handleSubmit}>
{/* Name */}
<div className='grid'>
    <label> Name :</label>
    <div className='bg-slate-100 p-2'> 
    <input
     type='text' 
     name ='name'
     onChange={handleOnChange}
     value={data.name}
     required
     placeholder='Enter Your Name' 
     className='w-full h-full outline-none bg-transparent'

     />
    </div>
   
    </div>

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
    required
    placeholder='Enter Your Password' 
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
    </div>
    {/* Confirm Password */}
    <div>
    <label> Confirm Password :</label>
    <div className='bg-slate-100 p-2 flex'>
    <input 
    type={showConfirmPassword ? "text" : "password"} 
    name='confirmPassword'
    onChange={handleOnChange}
    value={data.confirmPassword}
    required
    placeholder='ConfirmPassword' 
    className='w-full h-full outline-none bg-transparent'

    />

    <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
    <span>
    {
      showConfirmPassword ? (
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
    </div>

    {/* Login Button */}
    <button  className="bg-cyan-700 hover:bg-red-700 text-white font-semibold py-2 px-4 border w-full max-w-[150px] border-red-800 rounded-full hover:scale-110 transition-all mx-auto block mt-6 ">
Sign Up
</button>
</form>

<p className='my-5'>Already Have An Account ? <Link to ={"/login"} className='hover:text-red-600 hover:underline text-cyan-800'>Login</Link></p>

{/* Form Ends */}

</div>
    </div>
  </section>
  )
}

export default SignUp
