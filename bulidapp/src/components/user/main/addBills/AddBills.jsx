import React, { useState } from 'react'

const AddBills = () => {
  const [Addbills,setbills]=useState({
    companyName:"",
    PoNo:"",
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setbills((preval)=>({...preval,[name]:value}))

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(Addbills);

  }

  return (
    <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
            <form action="" className='bg-red-100 h-[70%] overflow-hidden w-1/2 shadow-2xl rounded-2xl  flex gap-5 px-[80px] flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
          <div className='font-bold h-30 text-3xl  flex justify-center items-center max-lg '>
            <h1  className='mt-20'>Add Bills</h1>
           </div>
    
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 ' >
            <input type="text" name="companyName" placeholder='Enter Company Name' className='outline-0  px-9 h-7  w-full' onChange={handleChange} />
            
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="PoNo" placeholder='Enter PoNo' className='outline-0 px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="date" name="workCompletionDate" placeholder='Enter workCompletionDate' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="address" placeholder='Enter address' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="PAN" placeholder='Enter PAN' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="GSTNo" placeholder='Enter GSTNo' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="clientBankName" placeholder='Enter clientBankName' className='outline-none px-9 h-7 w-full' onChange={handleChange}/>
              
          </div>
    
          
    
            <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
            <button className='h-10 text-white font-bold text-md tracking-widest w-full'>click</button>
          </div>
          </form>
        </div>
  )
}

export default AddBills