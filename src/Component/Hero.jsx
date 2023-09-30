import React from 'react'
import Header from './Header'
import lo from "../assets/video.png"
import Footer from './Footer'

const Hero = () => {
  return (
    <>
        <Header />


        <main>
            <section className='  flex justify-around px-[5rem] '>

                
                <figcaption className='w-[40%]'>
    <h1 className='text-[2.5rem] font-bold'>Your Video  is ready!</h1>
    <span>Name</span>
    <h3 className='tc font-semibold text-[15px]'>utittled_video-2002223</h3>

    <div>
        <input type="text" /> 
        <button>Send</button>
    </div>

    <section>
        <span>Video url</span>
        <input type="text" />
        <button>copy</button>
    </section>

    <section className="shrBtn">
        <h2>share your video</h2>
        <ul className='flex'>
            <div className='  border w-[10%] shadow-sm rounded-sm px-4 py-5'></div>
            <div className='  border w-[10%] rounded-sm shadow-sm px-4 py-5 mx-4' ></div>
            <div className='  border w-[10%] rounded-sm shadow-sm  px-4 py-5'></div>

        </ul>
    </section>
                </figcaption>

                <figure className='bg-red-500  w-[30%]'>
                    <div className='w-[400px] h-[300px]'>
                        <img src={lo} alt="" className='w-[100%]' />
                    </div>
                    <section>
                        <h1>Transcript</h1>
                        <div>
                            <select name="" id="">
                                <option value="english"> english</option>
                            </select>

                            <div className=' h-[16rem]   overflow-y-scroll '>

                          
                            <section className='flex my-2 space-x-2'>
                                <span clas>001</span>
                                <p className='w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>002</span>
                                <p className='w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>003</span>
                                <p className='w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>

                            <section className='flex my-2 space-x-2'>
                                <span>004</span>
                                <p className='w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis dolores laborum unde, aliquam molestias 
                                    sed eum quaerat sapiente delectus soluta!</p>
                            </section>
                            </div>
                        </div>
                    </section>
                </figure>
            </section>

            <section>
                <div>
                    <h1>to ensure the availabilty and privacy of your video,<br />
                     we recommend saving it to your account

                    </h1>
                     <button className='bg-red-500 px-2 py-2 text-white'> Save Video</button>
                     <h3>dont have an account ? <span className='border-b-red-500'>Create account</span></h3>
                </div>
            </section>
        </main>
      <Footer />
    </>
  )
}

export default Hero
