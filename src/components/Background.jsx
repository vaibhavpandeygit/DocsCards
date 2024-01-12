import React, { useEffect, useState } from 'react'

function Background({name}) {
  
  const firstName = name.substring(0, name.indexOf(' '));


  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center tex-zinc-600 text-xl font-semibold'>Make cards and enjoy dragging them freely ~ Vaibhav Pandey</div>
        {
          name ? (
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[4vw] leading-none tracking-tighter font-semibold text-zinc-900'>{firstName}'s Playground</h1>
          ):
          (
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[4vw] leading-none tracking-tighter font-semibold text-zinc-900'>Make it Yous Buddy</h1>
          )
        }
      
      </div>
    </>
  )
}


export default Background