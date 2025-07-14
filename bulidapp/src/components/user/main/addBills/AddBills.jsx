import React, { useContext, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AddItems from './addItems/AddItems'
import toast from 'react-hot-toast'
import empServices from '../../../../service/empServices'
import { contextApi } from '../../../context/Context'

const AddBills = () => {

  const navigate=useNavigate()
  const [Addbills,setbills]=useState({
    companyName:"",
    PoNo:"",
    invoiceDate:new Date().toISOString().split("T")[0],
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
  })

  const {globalState}=useContext(contextApi)
  
 const [items,setItems]=useState([])

  const handleClick=()=>{
    let obj={
      id:Date.now(),
      description:"",
      quantity:"",
      rate:"",
      amount:"",
      cgstPercent:"",
      sgstPercent:""
    }
    setItems((preval)=>([...preval,obj]))

  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    setbills((preval)=>({...preval,[name]:value}))
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
 let {companyName,workCompletionDate,PoNo,address,PAN,GSTNo,clientBankName}=Addbills
    let totalAmount=items.reduce((acc,val)=>{
      const base=parseInt(val.amount)
      const cgst=base*parseInt(val.cgstPercent)/100
      const sgst=base*parseInt(val.sgstPercent)/100

      // console.log(base,cgst,sgst,acc);
      
      return base+cgst+sgst+acc
    },0)
    let payload={
      companyName,
      workCompletionDate,
      PoNo,
      address,
      PAN,
      GSTNo,
      clientBankName,
      items,
      invoiceDate:new Date().toISOString().split("T")[0],
      totalAmount
    }
    console.log(payload);
    
      (async()=>{
try {
        let data=await empServices.addBills(payload,globalState.token)
        console.log(data);
        
      if(data.status==201){
        toast.success("Bills added successfully")
        navigate("/home")
      }else{
        toast.error("Something went wrong")
      }
} catch (error) {
  toast.error("Something went wrong")
}
    })();
    

  }

  

  const removeElement=(id)=>{
    setItems(items.filter((val)=>val.id!=id))
    
  }

  const updateElement=(id,name,value)=>{


    setItems((preVal)=>{
     return preVal.map((val)=>{
        if(val.id==id){
      
          
          const updateItems={
            ...val,[name]:value
          }
          updateItems.amount=val.rate*val.quantity
          return updateItems
        }

        return val
      })

    })
  }




  
  return(
    <div className='bg-[#efefef]  size-full flex justify-center items-center gap-10 px-25 '>
            <form className='bg-red-100 h-[70%]  overflow-scroll w-1/2 shadow-2xl rounded-2xl  flex gap-5 px-[80px]  flex-col max-sm:w-[90%] ' onSubmit={handleSubmit}>
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
              <input type="date" name="workCompletionDate" placeholder='Enter workCompletionDate' className='outline-none px-9 h-7 w-full' onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}/>
              
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


            {
              items.map((val)=><AddItems key={val.id}  removeElement={removeElement} updateElement={updateElement} 
            val={val}>
                
              </AddItems>)
              
            }
  
  


            <div className='border-2 mb-6 w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
            <button className='h-10 text-white font-bold text-md tracking-widest w-full' onClick={handleClick} type='button'>click to AddItems</button>
          </div>
    
            <div className='border-2 mb-6 w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' onChange={handleChange}>
            <button className='h-10 text-white font-bold text-md tracking-widest w-full'>click</button>
          </div>
  

  
          
          </form>

         
          
        </div>
  )
}

export default AddBills