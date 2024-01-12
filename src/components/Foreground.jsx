import React, { useRef, useState } from 'react'
import Card from './Card'
import Form from './Form';


function Foreground(props) {

    const ref = useRef(null)
    const [data,setData] = useState([]);



    const getData=(cardName,color,name,desc)=>{
      props.findName(name);
        if(!desc){
          desc = "This is a small frontend project by Vaibhav Pandey. Drag and enjoy (Fill description to avoid this line)";
        }
      setData((old)=>{
        return [...old,
          {
            desc: desc,
            close: true,
            tag: {isOpen: true, tagTitle: cardName, tagColor: color,},
          }
        ]
      })
    }

  return (
    <div>
     
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
       <Form onSubmit = {getData}/>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
    </div>
  )
}

export default Foreground