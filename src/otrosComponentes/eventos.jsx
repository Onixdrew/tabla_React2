import React from 'react'

const Boton = () => {
  return (
    <div>
        <button onClick={console.log('hello world')} className=' bg-sky-500 rounded-full hover:text-white w-[4em] shadow-lg'>Click</button>
    </div>
  )
}

export default Boton 