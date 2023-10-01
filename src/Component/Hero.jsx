import React, { useState } from 'react';

import Header from './Header'
import lo from "../assets/video.png"
import Footer from './Footer'
import {TbEdit} from "react-icons/tb"
import {FiCopy} from "react-icons/fi"
import {BsFacebook, BsWhatsapp, BsTelegram} from "react-icons/bs"
import Overlay from './Ov'





const Hero = () => {

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <>
 

    {isOverlayVisible && <Overlay onClose={() => setIsOverlayVisible(false)} />}

        <main className='bg-white pb-[4rem]'> 

        <Header />
            <section className='  flex justify-around px-[5rem] pt-[4rem]  bg-white'>
                
                <figcaption className='w-[40%]'>
    <h1 className='text-[2.5rem] font-bold'>Your Video  is ready!</h1>
    <span>Name</span>
    <div className='flex'>

    <h3 className='tc font-semibold text-[25px]'>utittled_video-2002223 </h3>
    <span>
        <TbEdit />
        </span>
    </div>

    <div className='my-[2.5rem] relative'>
        <input type="text"  className='bg-slate-200 w-full py-4 rounded-[18px] '/> 
        <div className='absolute right-[1rem] t'>
        <button className='tcb py-2 text-slate-50 px-3 w-[5rem] rounded-md' 
  onClick={() => setIsOverlayVisible(true)}> Send
</button>

        </div>
    </div>
      

    <section className='relative'>
        <span className='font-bold text-[1.2rem]  my-3 block'>Video url</span>
        <input type="text" className=' w-full py-4 rounded-[18px] border pl-3' placeholder='www.fhrjety45678ujhvddwert.video'/>
        <div className='absolute right-[1rem] t2 flex '>
            <span className=''>
         
            </span>
        <button className='border py-2 text-slate-50 px-3 w-[5.8rem]  flex space-x-2 tc font-semibold rounded-md'>
            
            
           <span>   <FiCopy className='pt-1 text-[22px] mr-1' /> </span> Copy</button>

        </div>
    </section>

    <section className="shrBtn">
        <h2 className='font-semibold mt-[2rem]'>share your video</h2>
        <ul className='flex mt-2' >
          

            <button className='border text-slate-50 w-[25%] shadow-sm  px-4 py-3  flex space-x-2 tc font-semibold rounded-md'>
            
            
            <span>   <BsFacebook className='pt-1 text-[22px] mr-1 text-blue-600' /> </span> Facebook</button>
          
            
            <button className='border text-slate-50 w-[25%] shadow-sm  px-4 py-3 mx-4  flex space-x-2 tc font-semibold rounded-md'>
            
            
            <span>   <BsWhatsapp className='pt-1 text-[22px] mr-1 text-green-600' /> </span> Whatsapp</button>
          
            
            <button className='border text-slate-50 w-[25%] shadow-sm  px-4 py-3  flex space-x-2 tc font-semibold rounded-md'>
            
            
            <span>   <BsTelegram className='pt-1 text-[22px] mr-1 text-blue-600' /> </span> Telegram</button>
          
            

        </ul>
    </section>
                </figcaption>

                <figure className='  w-[30%] relative '>
                  
                    <div className='w-[450px] h-[400px]'>
                        <img src={lo} alt="" className='w-[100%]' />
                    </div>
                    <section className='mb-[4rem]'>
                        <h1 className='font-bold my-3'>Transcript</h1>
                        <div>
                            <select name="" id="" className='bg-slate-200 shadow-sm outline-none px-3 w-[40%] rounded-sm py-1 mb-[1.5rem]   border' >
                                <option value="english" > english</option>
                            </select>

                            <div className=' h-[16rem]   overflow-y-scroll '>

                          
                            <section className='flex my-2 space-x-2'>
                                <span clas>001</span>
                                <p className='w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>002</span>
                                <p className='w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>003</span>
                                <p className='w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>004</span>
                                <p className='w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>
                            </div>
                        </div>
                    </section>
                </figure>
            </section>
            </main>
            <section className='flex justify-center'>
                
                <div>
                    <h1 className='font-bold text-slate-900 text-center py-[3rem]'>To ensure the availabilty and privacy of your video,<br />
                     we recommend saving it to your account

                    </h1>
                    <div className='flex justify-center'>

                     <button className='tcb px-2 py-2 w-[40%] rounded-md text-white'> Save Video</button>
                    </div>
                     <h3 className='py-[3rem] text-center'>Dont have an account ? <span className='font-bold tc  underline decoration-slate-950 cursor-pointer'>Create account</span></h3>
                </div>
            </section>
        
      <Footer />
    </>
  )
}

export default Hero
