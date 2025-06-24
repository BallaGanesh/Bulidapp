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
    <div className={`w-full h-[80px] bg-black flex justify-around items-center text-xl text-amber-50 gap-4 max-sm:justify-start max-sm:px-4 ${show?'h-[200px] flex flex-col justify-around gap-2.5 items-start':""}sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>

      <div className='hidden max-sm:flex'>

            {
                show?<FaRegWindowClose onClick={handleShow}/>: <TfiMenuAlt onClick={handleShow}/>
            }
           
        </div>
    
    <div className={`max-sm:hidden${show?'block':""}`} >
        <NavLink to="/home">Home</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}>
        <NavLink to="addBills">Add Bills</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}> <NavLink to="filterBills"> Filter Bills</NavLink>
    </div>
    <div className={`max-sm:hidden${show?'block':""}`}>
         <NavLink to="about">About</NavLink>
    </div>
    </div>
  )
}

export default Navbar