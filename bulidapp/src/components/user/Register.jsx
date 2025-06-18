import React from 'react'

const Register = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center gap-32 px-24 '>
      <form action="" className='bg-white h-1/2 w-1/2 shadow-2xl rounded-2xl gap-19 px-24' >
      <div className='font-bold h-20 text-2xl  flex justify-center items-center'>
        <h1>Registration From</h1>
       </div>

      <div className='h-10 flex justify-center items-center  border-2 rounded-md px-2 ' >
        <input type="text" name="" placeholder='Enter your Name' className='outline-none '  />
      </div>
       <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md px-2'>
        <input type="text" name="" placeholder='Enter your UserName' />
      </div>
       <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md'>
        <input type="email" name="" placeholder='Enter Email'/>
      </div>
       <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md'>
        <input type="password" name="" placeholder='Enter password'/>
      </div>
       <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md'>
        <input type="password" name="" placeholder='Re-Type Password'/>
      </div>
       <div className='h-10 flex justify-center items-center gap-2 border-2 rounded-md'>
        <button>click</button>
      </div>
      </form>
    </div>
  )
}

export default Register