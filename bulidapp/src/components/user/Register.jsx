import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { BiRename } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { validatePassword } from "val-pass";
import toast from 'react-hot-toast';
import empServices from '../../service/empServices';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate=useNavigate()
  let [matched,setmatched]=useState(true)
  const[errorMessage,setErrorMessage]=useState("")
  
 

  let[formData,setFromData]=useState({
    userName:"",
    password:"",
    email:"",
    name:""
  })

  let handleChange=(e)=>{
    let{name,value}=e.target 
    if(name=="password"){
      let{validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      // console.log(getAllValidationErrorMessage);
      validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
      value==""&&setErrorMessage("")
    }
    setFromData((preval)=>({...preval,[name]:value}))
  }

  let handleSubmit=e=>{
    e.preventDefault()
    // console.log(formData);
       let {name,userName,password,email}=formData
    if(!name||!userName||!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
     let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!matched){
      toast.error("passsword and confirm password did not match")
  return
    }
 console.log(formData);
(async()=>{
try {
  let data=await empServices.regiUser(formData)
  if(data.status==201){
    toast.success("regisretd succefully")
    navigate("/")

  }else{
    toast.error("something went wrong")
  }
} catch (error) {
  toast.error("something went wrong")
}
})()
 
  }
  

     let checkRepeatPassword=e=>{
    let {value}=e.target
    //  console.log(value);
    // console.log(repeatpassword);
   formData.password!=value?setmatched(false):setmatched(true) 
   value==""&&setmatched(true)
     }
    
  


  return (
    <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
        <form action="" className='bg-red-100 h-[70%] w-1/2 shadow-2xl rounded-2xl  flex gap-5 px-[80px] flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
      <div className='font-bold h-30 text-3xl  flex justify-center items-center max-lg '>
        <h1  className='mt-20'>Registration From</h1>
       </div>

      <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 ' >
        <input type="text" name="name" placeholder='Enter your Name' className='outline-0  px-9 h-7  w-full' onChange={handleChange} />
        <span><CgNametag /></span>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="text" name="userName" placeholder='Enter your UserName' className='outline-0 px-9 h-7 w-full' onChange={handleChange}/>
          <span><BiRename /></span>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="email" name="email" placeholder='Enter Email' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
          <span><MdAlternateEmail /></span>
      </div>

       <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
          <input type="password" name="password" placeholder='Enter password' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
          <span><RiLockPasswordFill /></span>
      </div>
      <div className={errorMessage?'w-full flex justify-center items-center px-3 rounded-sm':'hidden'}>
          <span className='text-red-700'>*{errorMessage}</span>
        </div>

       <div className={`h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 ${!matched?' bg-red-700':' to-black'}`}>
          <input type="password" name="password" placeholder='Re-Type Password' className='outline-none px-9 h-7 w-full' onChange={checkRepeatPassword}/>
          <span><TiArrowRepeatOutline /></span>
      </div>

        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
        <button className='h-10 text-white font-bold text-md tracking-widest w-full'>click</button>
      </div>
      </form>
    </div>
  )
}

export default Register