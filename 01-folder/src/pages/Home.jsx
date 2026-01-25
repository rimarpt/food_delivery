import React from 'react'
import Nav from '../component/Nav.jsx'
import Catagory from './Catagory.jsx' 

function Home() {
  return (
    <div className='bg-slate-200 max-w-[100%] min-h-screen'>
      <Nav />
              <div className='flex items-start justify-center gap-6 '> 
                {Catagory.map((cat)=>(
                    <div key={cat.id} className='h-20 w-30 bg-white rounded-lg flex flex-col item-center justify-center text-green-500 text-lg shadow-lg hover:scale-105 hover:bg-green-100 duration-300 cursor-pointer'>
                        <div className='text-3xl '>{cat.image}</div>   
                        <h3 className='text-md font-semibold '>{cat.name}</h3>
                    </div>

                ))}
              </div>
    </div>
  )
}

export default Home
