import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";

const Register = () => {

  let[formData,setFromData]=useState({
    // username:"",
    // password:"",
    // email:"",
    // name:""
  })

  let handleChange=(e)=>{
    let{name,value}=e.target 
    setFromData((preval)=>({...preval,[name]:value}))
  }

  let handleSubmit=e=>{
    e.preventDefault()
    console.log(formData);

  }

  return (
    <div className='bg-[#efefef]  size-full flex justify-center items-center  '>
        <form action="" className='bg-red-100 h-[90%] w-1/2 shadow-2xl rounded-2xl  flex gap-5 px-[80px] flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
      <div className='font-bold h-20 text-2xl  flex justify-center items-center max-lg '>
        <h1>Registration From</h1>
       </div>

      <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 ' >
        <input type="text" name="name" placeholder='Enter your Name' className='outline-0 
          px-9 h-10  w-full' onChange={handleChange} />
        <span><CgNametag /></span>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="text" name="username" placeholder='Enter your UserName' className='outline-0 px-9 h-10' onChange={handleChange}/>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="email" name="email" placeholder='Enter Email' className='outline-none px-9 h-10' onChange={handleChange}/>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="password" name="password" placeholder='Enter password' className='outline-none px-9 h-10' onChange={handleChange}/>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="password" name="password" placeholder='Re-Type Password' className='outline-none px-9 h-10' onChange={handleChange}/>
      </div>

        <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md text-xl text-white bg-black font-bold' onChange={handleChange}>
        <button>click</button>
      </div>
      </form>
    </div>
  )
}

export default Register