import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../../context/Context'
import empServices from '../../../../service/empServices';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {

const {globalState}=useContext(contextApi)
console.log(globalState);

const navigate=useNavigate()

 const [allBills,setAllBills]=useState([])
  
  useEffect(()=>{
    (async ()=>{
     let data=await empServices.allBills(globalState.token)
     if(data.status==200){
      setAllBills((preVal)=>([...preVal,...data.data.bills]))
     }
    })();
  },[])

  console.log(allBills);


  const handelUpateBills=(bill)=>{
    // console.log(bill);
    
    navigate("updateBills",{state:bill})
  }
  const handeldeleteBills=(id)=>{
    console.log(id);
  (async()=>{
   try {
       let data=await empServices.deleteBills(globalState.token,id)
      console.log(data);
      if(data.status==200){
        toast.success(`${data.data.message}`)
        setAllBills((preVal)=>preVal.filter((val)=>val._id!=data.data.bill._id))
      }else{
    toast.error("Something went wrong")
        
      }
   } catch (error) {
    console.log(error);
    toast.error("Something went wrong")
    
   }
      
    })()
  }


  return (
     <div className="w-full min-h-screen p-28 bg-gray-100 flex flex-wrap gap-6 justify-center">
      {allBills.map((bill, index) => (
        <div
          key={index}
          className="w-80 h-60 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 p-6 max-md:w-full"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">{bill.companyName}</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-semibold">GST No:</span> {bill.GSTNo}</p>
            <p><span className="font-semibold">PAN:</span> {bill.PAN}</p>
            <p><span className="font-semibold">PO No:</span> {bill.PoNo}</p>
            <p><span className="font-semibold">Total Amount:</span> ₹{bill.totalAmount}</p>
            <p><span className="font-semibold">Invoice Date:</span> {new Date(bill.invoiceDate).toLocaleDateString()}</p>
          </div>

          <div className='flex w-full gap-4'>
            <button className='grow size-full h-9 rounded-sm bg-green-400' onClick={()=>{
                handelUpateBills(bill)}}>Update</button>
            <button className='grow size-full h-9 rounded-sm bg-red-500' onClick={()=>{
                handeldeleteBills(bill._id)}}>delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home