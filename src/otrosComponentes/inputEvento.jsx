import React from 'react'

function InputEvento() {
    
  return (
    <div>
        <input type="text" placeholder='ingresa la oracion'   className='border-2 border-black mt-5 ml-5' onChange={(event)=>console.log(event.target.value)}/>
    </div>
  )
}

export default InputEvento