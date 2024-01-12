import React, { useState } from 'react'

const Form = (props) => {

  const [form,setForm] = useState(false)
  const [isNew,setIsNew] = useState(false)
  
  const handleClick =()=>{
      setForm(true)
      if(form){
        setForm(false)
      }
  }
  const [name,setName] = useState("");
  const [cardName,setCardName] = useState("");
  const [bgcolor,setBgcolor] = useState("");
  const [desc,setDesc] = useState("");

  //to handle the name input
  const [temp,setTemp] = useState(true)

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.onSubmit(cardName,bgcolor,name,desc);
    setTemp(false);
    setForm(false);
    setBgcolor("");
    setCardName("");
    setDesc("")
    setIsNew(true)
    
  }
  
  

  return (
    <div className='item-justify-right' style={{height:"50px",zIndex:"6"}}>
      {isNew? (<button
        onClick={handleClick}
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Add New Card
      </button>):
      (
        <button
        onClick={handleClick}
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Let's Start
      </button>
      )}

      {form && (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">

            {temp && (
              <>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input
              required
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}

              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex- Ojas Mishra"
             />
             </>
            )}
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Name</label>
            <input
              required
              type="text"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex- Task name to do..."
            />
          </div>
          <select required onChange={(e)=>{setBgcolor(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
            <option value={""}>--Card Colour--</option>
            <option value={"bg-sky-600"}>Sky</option>
            <option value={"bg-green-600"}>Green</option>
            <option value={"bg-red-600"}>Red</option>
            <option value={"bg-orange-500"}>Orange</option>
            <option value={"bg-pink-600"}>Pink</option>
            <option value={"bg-emerald-600"}>Emerald</option>
          </select>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Description</label>
          <textarea
              type="text-area"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex- Today evening, I'll play golf."
            />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        
          >
            Add Card
          </button>
        </form>
      )}


    </div>
  );
}

export default Form
