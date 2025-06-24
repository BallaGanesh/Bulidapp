import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import empServices from '../../service/empServices'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
 const Navigate=useNavigate()
    let[formData,setFromData]=useState({

    password:"",

    email:""
  })

   const handleChange=e=>{
    let {name,value}=e.target
    
    setFromData((preVal)=>({...preVal,[name]:value}))
  }

  let handleSubmit=e=>{
    e.preventDefault()
    // console.log(formData);
     let {password,email}=formData
    if(!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
   
    (async()=>{
try {
  let data=await empServices.loginUser(formData)
  if(data.status==200){
    toast.success("Login succefully")
     Navigate("/home")

  }else{
    toast.error(data.
response.data.message)
  }
} catch (error) {
  toast.error("something went wrong")
}
})()

}

  return (
     <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
        <form action="" className='bg-red-100 h-[60%] w-[60%] shadow-2xl rounded-2xl  flex gap-5 px-[80px] flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
      <div className='font-bold h-30 text-3xl  flex justify-center items-center max-lg '>
        <h1  className='mt-20'>Login From</h1>
       </div>


        <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
                  <input type="email" name="email" placeholder='Enter Email' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
                  <span><MdAlternateEmail /></span>
              </div>
        
               <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
                  <input type="password" name="password" placeholder='Enter password' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
                  <span><RiLockPasswordFill /></span>
              </div>

         <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
        <button className='h-10 text-white font-bold text-md tracking-widest w-full'>click</button>
      </div>

      <div className='hover:underline text-center'><Link to='/register'>signup</Link></div>
      </form>

    </div>
  )
}

export default Login