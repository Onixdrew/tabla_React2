
import React from 'react'

const Modal2 = () => {
  return (
    <div>

        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
        <div className='flex flex-col w-[50%] left-[25%] border-2 border-black absolute bg-green-500 top-[20%]'>
        <div className='ml-[30%] mt-7 text-2xl font-serif'>Editar área del conocimiento</div>
        <input
            className='w-[75%] mt-7 mb-6 mx-7 border-[1px] border-black'
            type="text"
            placeholder="Nombre"
            // value={editNombre}
            // onChange={(e) => setEditNombre(e.target.value)}
        />
        <textarea
            className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
            type="text"
            placeholder="Descripción"
            // value={editDescripcion}
            // onChange={(e) => setEditDescripcion(e.target.value)}
        />
        <div className='ml-[50%] flex justify-evenly mb-10'>
            <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' >Aceptar</button>
            <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md'>Cancelar</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Modal2



