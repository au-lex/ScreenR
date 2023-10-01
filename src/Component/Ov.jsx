import React from 'react';
import suc from "../assets/success-kite 1.png"
const Overlay = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        width: '400px',
        height: '600px',
        backgroundColor: 'rgba(242, 244, 247, 1)',
        borderRadius: '15px',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
<div style={{
    cursor: 'pointer',
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    // padding: "2rem"
}}>

    <button onClick={onClose} style={{
        position: 'absolute',
        right: '2.5rem',
        top: '40px',
        backgroundColor: 'transparent',
        border: '2px solid gray',
        borderRadius: '50%',  
        width: '30px',        
        height: '30px',       
        fontSize: '14px',
        lineHeight: '16px',   
        textAlign: 'center', 
        padding: '0'          
    }}>X</button>

</div>

<section className='flex justify-center ' >


<section>
    <div className='flex justify-center'>

  <div className='w-[250px] h-[250px]'>


      <img src={suc} alt="" />  
  </div>
    </div>
      
      <h3 className='text-center text-[15px]'>Your video link has been sent to johnmark@gmail.com</h3>
      <h4 className='text-center text-[12px] mt-8 mb-6'>Would you need to view this video later?<br /> Save to your account now!</h4>
      
     
     
    
                    <div className='flex justify-center'>

                     <button className='tcb px-2 py-2 w-[40%] rounded-md text-white'> Save Video</button>
                    </div>
                     <h3 className='py-[1rem] text- text-[12px] text-center'>Dont have an account ? <span className='font-bold tc  underline decoration-slate-950 cursor-pointer'>Create account</span></h3>
                     </section>

      </section>
      
       </div>
    </div>
  );
}

export default Overlay;
