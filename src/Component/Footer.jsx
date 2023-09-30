import React from 'react'


import logo from "../assets/Frame 1000002580 (2).png"



const Footer = () => {
  return (
    <footer className='tcb w-full h-[40vh]'>
<section className='flex justify-around px-[5rem] pt-[5rem]'>
    <div className ="footerlogo">
        <img src ={logo} alt="" />
    </div>

    <ul>
        <h2 className=' text-white my-2'>Menu</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>Home</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Converter</li>
        <li className=' text-slate-300 my-2 text-[12px]'>How it works</li>
    </ul>


    <ul>
        <h2 className=' text-white my-2'>About</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>About</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Contact us</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Privacy policy</li>
    </ul>


    <ul>
        <h2 className=' text-white my-2'>Screen Record</h2>
        <li className=' text-slate-300 my-2 text-[12px]'>Browser window</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Desktop</li>
        <li className=' text-slate-300 my-2 text-[12px]'>Application</li>
    </ul>
</section>

</footer>
  )
}

export default Footer
