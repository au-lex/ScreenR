import React from 'react'
import logo from "../assets/Frame 1000002580.png"

const Header = () => {
    return (
        <>
            <section className='flex  justify-around pt-5'>
                <div className="logo">
                        <img src={logo} alt="" />
                </div>
                <nav className ="flex space-x-8 pt-4 ">
                    <a href="#" className ="block text-[16px] font-semibold capitalize  text-gray-800">features</a>
                    <a href="#" className ="block text-[16px] font-semibold   text-gray-800">How it Works</a>
                </nav>
                <div className = 'pt-5'>
                   <button className ="block text-[16px] font-bold capitalize  text-gray-800">get started</button>  </div>
            </section>
        </>
    )
}

export default Header
