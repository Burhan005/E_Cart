import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';


const Header = () => {

  const user= useSelector(state=>state?.user?.user)
  const dispatch=useDispatch()
  const [menuDisplay,setMenuDisplay]=useState(false)
  const searchInput=useLocation()
  const URLSearch= new URLSearchParams(searchInput?.search)
  const searchQuery=URLSearch.getAll("q")
  const[search,setSearch]=useState(searchQuery)

  const context =useContext(Context)
  const navigate =useNavigate()
 

  const handleLogout =async()=>{
    const fetchData=await fetch(SummaryApi.logOut.url,{
      method:SummaryApi.logOut.method,
      credentials:'include'
    })

    const data=await fetchData.json()
    
    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }
    if(data.error){
      toast.error(data.message)
    }

  }
  const handleSearch =(e)=>{

    const {value} = e.target
setSearch(value)
    if(value){
      navigate(`/search?q=${value}`)

    }else{
      navigate("/search")
    }

  }
 

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-5 justify-between'>
        <div className='cursor-pointer'>
          <Link to={"/"}>
          <Logo w={90} h={60 }/>
          </Link>
        </div>
        <div className=' hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full border-cyan-500 focus-within:shadow-md pl-2'>
        <input type='text' placeholder='Search... ' className='w-full outline-none 'onChange={handleSearch} value={search}/>
        <div className='text-lg min-w-[50px] bg-cyan-700 h-8 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
          <GrSearch/>
        </div>
        </div>
        
        <div className='flex items-center gap-8'>
        {/* User Icon */}
      <div className='relative flex justify-center shadow-lg rounded'>
      {
        user?._id && (
          <div className='text-3xl text-cyan-800 cursor-pointer flex justify-center'onClick={()=>setMenuDisplay(preve=>!preve)}>
       {
        user?.profilePic ? (
          <img src={user?.profilePic} alt={user?.name} className='w-10 h-10 rounded-full'/>
        ): (
          <FaRegCircleUser/>

        )
       }
       
       </div>

        )
      }
     
       {
        menuDisplay &&(
          <div className='absolute bg-white bottom-0 top-11 h-fit p-2 rounded'>
       <nav>
       {
        user?.role === ROLE.ADMIN &&(
        <Link to={"/admin-pannel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-cyan-600 p-2'onClick={()=>setMenuDisplay(preve=>!preve)}>Admin Panel</Link>



        ) 
       }
       <Link to={"/order"} className='whitespace-nowrap hidden md:block hover:bg-cyan-600 p-2'onClick={()=>setMenuDisplay(preve=>!preve)}>Order</Link>
       </nav>
       </div>

        )
       }
       
      </div>
        {/* User Icon */}

         {/* Cart Icon */}
         {
          user?._id && (
            <Link to={"/cart"} className='text-3xl text-cyan-800 cursor-pointer relative'>
     <span><FaShoppingCart/></span>
     
        <div className='bg-red-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
     <p className='text-sm'>
    {context?.cartProductCount}
     </p>
     </div>
       </Link>

          )
         }
       
 {/* Cart Icon */}

{/* Login/Logout Button */}

<div>
{
  user?._id ? (
    <button onClick={handleLogout} className="bg-cyan-700 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-800 rounded-full">
Logout
</button>
  )
  :
  (
    <Link to={"/login"} className="bg-cyan-700 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-800 rounded-full">
 Login
</Link>

  )
}

  
</div>

{/* Login/Logout Button */}

        </div>
      </div>
    </header>
  )
}

export default Header
