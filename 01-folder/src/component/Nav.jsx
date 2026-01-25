import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <div className="h-auto mt-2 pt-6 text-black flex justify-center gap-10 sm-gap-0 items-center shadow-lg ">
                <div className='w-15 h-14 bg-white flex items-center rounded-xl justify-center shadow-lg'>
                <MdFastfood className=" text-4xl text-green-500"/>
                </div>

                <form action="" className='h-14 px-20 flex items-center justify-center bg-white rounded-lg'>
                    <FaSearch className='w-[20px] h-[20px] -px-3 flex justify-center text-green-500' />
                    <input type="text" placeholder='Search' className='w-[50vw] h-10 rounded-lg p-2'/>
                </form>

                <div className='w-15 h-14 sm-w-20 bg-white flex items-center rounded-xl justify-center shadow-lg'>
                  <span className='text-green-500 font-bold text-lg absolute top-0 right-51 '>0</span>
                <FaShoppingCart className="text-4xl text-green-500"/>
                </div>
    </div>
  )
}

export default Nav
