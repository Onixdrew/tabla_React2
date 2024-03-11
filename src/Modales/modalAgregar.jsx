import React, { useState } from 'react';

const Modal = () => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     descripcion: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAceptar = () => {
//     // Puedes guardar los datos en el estado local o pasarlos a la función onSubmit
//     // para manejarlos en el componente principal.
//     onSubmit(formData);

//     // Cerrar el modal después de aceptar.
//     cerrar();
//   };

//   if (!abrir) {
//     return null;
//   }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
        <div className='flex flex-col w-[50%] left-[25%] border-2 border-black absolute bg-blue-300 top-[20%]'>
          <div className='ml-[30%] mt-7 text-2xl font-serif'>Agrega nueva área del conocimiento</div>
          <input
            className='w-[75%] mt-7 mb-6 mx-7 border-[1px] border-black '
            type="text"
            placeholder="Nombre"
          //   value={nombre}
          //   onChange={(e) => setNombre(e.target.value)}
          />
          <textarea
            className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
            type="text"
            placeholder="Descripción"
          //   value={descripcion}
          //   onChange={(e) => setDescripcion(e.target.value)}
          />
          <div className='ml-[50%] flex justify-evenly mb-10'>
            <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' >Aceptar</button>
            <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md' >Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;