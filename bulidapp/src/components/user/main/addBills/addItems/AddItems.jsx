 


const AddItems = ({removeElement,val,updateElement}) => {
  // console.log(removeElement,val);
  console.log(val);


    const handleChange=(e)=>{
         let {name,value}=e.target
  updateElement(val.id,name,value)
}

     
 


  return (
    <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
            <div className='bg-red-100 h-[90%]  overflow-scroll w-[100%] shadow-2xl rounded-2xl  flex gap-5 px-[30px]  flex-col max-sm:w-[90%] '>
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
            <input type="text" name="description" placeholder='Enter description' value={val.description} onChange={handleChange} className='outline-0  px-3 h-7  w-full'  />
            
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="number" name="quantity" placeholder='Enter quantity' value={val.quantity} onChange={handleChange}  className='outline-0 px-3 h-7 w-full' />
              
          </div>
    
           <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="number" name="rate" placeholder='Enter rate' value={val.rate} onChange={handleChange}  className='outline-none px-3 h-7 w-full' />
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="number" name="amount" placeholder='Enter amount' value={val.amount}  onChange={handleChange} className='outline-none px-3 h-7 w-full' />
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="number" name="cgstPercent" placeholder='Enter cgstPercent' value={val.cgstPercent} onChange={handleChange}  className='outline-none px-3 h-7 w-full' />
              
          </div>
          <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-1 '>
              <input type="number" name="sgstPercent" placeholder='Enter sgstPercent' value={val.sgstPercent} onChange={handleChange}  className='outline-none px-3 h-7 w-full' />
              
          </div>
    
          </div>
        </div>
  )
}

export default AddItems