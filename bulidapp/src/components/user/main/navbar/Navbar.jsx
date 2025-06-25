import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {

    const[show,setshow]=useState(false)

    const handleShow=()=>{
        setshow(!show)
    }
  return (
    <div className={`w-full h-[80px] bg-black flex justify-around items-center text-xl text-amber-50 gap-4 max-sm:justify-start max-sm:px-8 ${show?'h-[200px] flex flex-col justify-around gap-2.5 items-start py-2.5':""}sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>

      <div className='hidden max-sm:flex'>

            {
                show?<FaRegWindowClose onClick={handleShow}/>: <TfiMenuAlt onClick={handleShow}/>
            }
           
        </div>
    
    <div className={`max-sm:hidden${show?'block':""}`} >
        <NavLink to="/home" className={({isActive})=>isActive?"text-shadow-sm bg-white rounded-sm ease-[2s]":""} end>Home</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}>
        <NavLink to="addBills" className={({isActive})=>isActive?"bg-amber-50 text-black rounded-sm":""}>Add Bills</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}> 
        <NavLink to="filterBills" className={({isActive})=>isActive?"bg-amber-50 text-black rounded-sm":""}> Filter Bills</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}>
         <NavLink to="about" className={({isActive})=>isActive?"bg-amber-50 text-black rounded-sm":""}>About</NavLink>
    </div>
    </div>
  )
}

export default Navbar