import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import empServices from '../../../../service/empServices'
import { contextApi } from '../../../context/Context'
import { useNavigate } from 'react-router-dom'

const FilterBills = () => {

   const [showCompanyNames,setShowCompanyName]=useState(false)
  const [conpanyName,setComoantNames]=useState([])
  const {globalState}=useContext(contextApi)
  const navigate=useNavigate()
  const [queries,setQueries]=useState({
  PoNo:"",
  fromWorkCompletionDate:"",
  toWorkCompletionDate:"",
  fromInvoicedate:"",
  toInvoiceDate:"",
  companies:[]
  })
  const handleChnage=(e)=>{
    const {name,value,checked}=e.target
    if(name=="companies"){
     checked?setQueries((preVal)=>({...preVal,companies:[...preVal.companies,value]})):setQueries(preVal=>({...preVal,companies:preVal.companies.filter((val)=>val!=value)}))
    }else{
      setQueries((preVal)=>({...preVal,[name]:value}))
    }
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    // console.log(queries);
// let {PoNo,fromInvoicedate,fromWorkCompletionDate,toInvoiceDate,toWorkCompletionDate,companies}=queries
//     const queryArray=[]
//     PoNo&&queryArray.push(`PoNo=${PoNo}`)
//     fromInvoicedate&&queryArray.push(`fromInvoicedate=${fromInvoicedate}`)
//     fromWorkCompletionDate&&queryArray.push(`fromWorkCompletionDate=${fromWorkCompletionDate}`)
//     toInvoiceDate&&queryArray.push(`toInvoiceDate=${toInvoiceDate}`)
//     toWorkCompletionDate&&queryArray.push(`toWorkCompletionDate=${toWorkCompletionDate}`)
//     companies&&queryArray.push(`companies=${companies}`)
//     // console.log(queryArray);
//     const query=queryArray.join("&")
let query=new URLSearchParams(queries).toString();
// console.log(query);
(async()=>{
  try {
    let data=await empServices.filteredBills(globalState.token,query)
    console.log(data);
    if(data.status==200 && data.data.count==0){
      toast.error("No Bills Found")
    }else if(data.status==200 && data.data.count>0){
      toast.success("bills fetched succesfully")
      navigate("/home/viewBills",{state:data.data.bills})
    }else{
      toast.error("Something went wrong")
    }
    
  } catch (error) {
      toast.error("Something went wrong")
    
  }
})()

  }
  const handelShow=()=>{
    setShowCompanyName(!showCompanyNames);
    (async()=>{
try {
        let data=await empServices.companyName(globalState.token)
      console.log(data);
      if(data.status==200){
        setComoantNames(data.data.companies)
      }else{
        toast.error("something went wrong")
      }
} catch (error) {

        toast.error("something went wrong")
  
}
      
    })();
  }
  // console.log(conpanyName);
  


  

  return (
    <div className='bg-[#efefef] h-full size-full flex justify-center items-center gap-10 px-30 '>
            <form action="" className='bg-red-100 h-[90%] w-[60%] shadow-2xl rounded-2xl  flex gap-5 px-[90px] flex-col max-sm:w-[90%] 'onSubmit={handelSubmit} >
          <div className='font-bold h-30 text-3xl  flex justify-center items-center max-lg '>
            <h1  className='mt-20'>Filter Bills</h1>
           </div>
    
    
             <div className='h-10 flex justify-center items-center  border-2 rounded-md w-full px-4 '>
              <input type="text" name="PoNo" placeholder='Enter PoNo' className='outline-0 px-9 h-7 w-full' onChange={handleChnage}/>
              
          </div>
    
             <div className=' flex justify-center items-center  border-2 rounded-md w-full px-4 '>

              <label htmlFor="" className='grow'>From workCompletionDate </label>
              <input type="date" name="workCompletionDate" placeholder='Enter workCompletionDate' className='outline-none px-9 h-7  ' 
                max={new Date().toISOString().split("T")[0]} onChange={handleChnage}/>
              
          </div>
           <div className=' flex justify-center items-center  border-2 rounded-md w-full px-4 '>
            <label htmlFor="" className='grow'>To workCompletionDate </label>
              <input type="date" name="workCompletionDate" placeholder='Enter workCompletionDate' className='outline-none px-9 h-7 '
                max={new Date().toISOString().split("T")[0]} onChange={handleChnage}/>
              
          </div>
           <div className=' flex justify-center items-center  border-2 rounded-md w-full px-4 '>
            <label htmlFor="" className='grow'>From invoiceDate </label>
              <input type="date" name="invoiceDate" placeholder='Enter invoiceDate' className='outline-none px-9 h-7 ' 
                max={new Date().toISOString().split("T")[0]} onChange={handleChnage}/>
              
          </div>
           <div className=' flex justify-center items-center  border-2 rounded-md w-full px-4 '>
            <label htmlFor="" className='grow'>To invoiceDate </label>
              <input type="date" name="invoiceDate" placeholder='Enter invoiceDate' className='outline-none px-9 h-7 ' 
                max={new Date().toISOString().split("T")[0]} onChange={handleChnage}/>
              
          </div>
              {
            showCompanyNames?<div className='flex justify-around w-full'>
              {
                conpanyName.map((val,index)=><div className='flex gap-2.5' key={index}>
                  {
                    index%2==0?<div className='flex gap-1.5'>
                  <input type="checkbox" value={val} name='companies' onChange={handleChnage}/>
                  <label htmlFor="">{val}</label>
                    </div>:<div className='flex gap-1.5'>
                    <input type="checkbox" value={val} name='companies' onChange={handleChnage}/>
                  <label htmlFor="">{val}</label>
                    </div>
                  }
                </div>)
              }
            </div>:""
          }

          <div className='border-2 mb-6 w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' >
            <button className='h-10 text-white font-bold text-md tracking-widest w-full'  onClick={handelShow}>view companyNames</button>
          </div>

            <div className='border-2 mb-6 w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]' >
            <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0' >click</button>
          </div>
  
              
       



                  </form>
    </div>
  )
}

export default FilterBills