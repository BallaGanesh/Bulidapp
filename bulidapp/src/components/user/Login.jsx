import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {

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
    console.log(formData);


}

  return (
     <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
        <form action="" className='bg-red-100 h-[60%] w-[60%] shadow-2xl rounded-2xl  flex gap-5 px-[80px] flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
      <div className='font-bold h-30 text-3xl  flex justify-center items-center max-lg '>
        <h1  className='mt-20'>Registration From</h1>
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
      </form>

    </div>
  )
}

export default Login