import React, { useState } from 'react'


const AddItems = ({removeElement,val}) => {
  // console.log(removeElement,val);



    const [addItems,setItems]=useState({
        description:"",
        quantity:"",
        rate:"",
        amount:"",
        cgstPercent:"",
        sgstPercent:""
    })


    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(addItems);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setItems((preval)=>({...preval,[name]:value}))

    }

     
 


  return (
    <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
            <div className='bg-red-100 h-[90%]  overflow-scroll w-[100%] shadow-2xl rounded-2xl  flex gap-5 px-[30px]  flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
              <div className='font-bold h-10 text-3xl  flex justify-center items-center max-lg '>
            <div  className='flex items-center gap-2 bg-red-400 px-4 py-1 rounded-xl hover:bg-red-600 text-amber-200 hover:text-amber-100 cursor-pointer max-sm:text-[20px]'  
            onClick={()=>{
            removeElement(val.id)
          }}><div className='max-sm:text-[20px]'>&otimes;RemoveItems</div></div>
           </div>
          <div className='font-bold h-15 text-3xl  flex justify-center items-center max-lg '>
            <h1  className='mt-10'>Add ITEMS</h1>
           </div>
    
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 ' >
            <input type="text" name="description" placeholder='Enter description' className='outline-0  px-3 h-7  w-full' onChange={handleChange} />
            
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="text" name="quantity" placeholder='Enter quantity' className='outline-0 px-3 h-7 w-full' onChange={handleChange}/>
              
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="text" name="rate" placeholder='Enter rate' className='outline-none px-3 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="text" name="amount" placeholder='Enter amount' className='outline-none px-3 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="text" name="cgstPercent" placeholder='Enter cgstPercent' className='outline-none px-3 h-7 w-full' onChange={handleChange}/>
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="text" name="sgstPercent" placeholder='Enter sgstPercent' className='outline-none px-3 h-7 w-full' onChange={handleChange}/>
              
          </div>
    
            <div className='border-2 mb-7 w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
            <button  className='h-10 text-white font-bold text-md tracking-widest w-full'>Sumbit</button>
          </div>
          </div>
        </div>
  )
}

export default AddItems