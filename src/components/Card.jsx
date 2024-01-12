import React from 'react'
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}){

  // bg-zinc-900/90
 

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{bounceStiffness:100, bounceDamping:10}}
      className={`relative flex-shrink-0 w-60 h-72 rounded-[50px] px-8 py-10 ${data.tag.tagColor} text-white overflow-hidden`}
    >
      
      <h3 className="text-xs leading-tight mt-5 font-semibold ">{data.desc}</h3>
      <h1 className='text-white'>{data.tag.Colour}</h1>

      <div className="footer absolute bottom-0 w-full  left-0">
        

          <div
            className='bg-white w-full h-10 py-4 flex items-center justify-center'
          >
            <h1 className="text-black w-full h-10 py-4 flex items-center justify-center text-sm font-semibold">{data.tag.tagTitle}</h1>
          </div>
      </div>
    </motion.div>
  );
}

export default Card
