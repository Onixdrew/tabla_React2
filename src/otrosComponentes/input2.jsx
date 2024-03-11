import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Input2 = () => {
    const [Dato, setDato]= useState()
    
    function mostrar (){
        console.log(Dato);
    };
    
    
  return (
    <div className='flex flex-col w-[30vw]'>
        <input type="text" placeholder='ingresa la oracion'  onChange={(event)=>setDato(event.target.value)}   className='border-2 border-black mt-5 ml-5 ' />
        <Link to='/mensaje'><button onClick={mostrar()} className='border border-black rounded-xl w-[10vw] ml-[10vw] mt-[3vh] bg-blue-500'>Aceptar</button></Link>
    </div>       
  )
}

export default Input2