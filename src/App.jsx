import React, { useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  const [name,setName] = useState("");

  const findName=(name)=>{
    setName(name);
  }
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background name={name}/>
      <Foreground findName={findName}/>

    </div>
  )
}

export default App