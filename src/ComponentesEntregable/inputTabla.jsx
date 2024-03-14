import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const InputTabla = ({ onBuscarChange, opcionApp }) => {
  const [buscar, setBuscar] = useState("");


  const actualizarBuscar = (e) => {
    const valorInput = e.target.value;
    setBuscar(valorInput);
    // esta es una funcion que viene del app, resive los cambios del input
    //  y los envia al app
    onBuscarChange(valorInput);
  };
   
  // Obtiene la opcion seleccionada en select y actualiza la variable opcion
  const obtenerOpcion = (e) => {
    const valorSeleccionado = e.target.value;
    opcionApp(valorSeleccionado);
  };

  return (
    <div className="flex">
      <FaSearch className="lg:ml-[1vw] md:ml-2 lg:mt-[0.8vh] sm:ml-[1.5vw] sm:mt-[0.6vw]  lg:mt-[0.5vh] text-lg absolute z-10 " />
      <input
        type="text"
        placeholder="Buscar"
        value={buscar}
        onChange={actualizarBuscar}
        className="border-2 lg:pl-[3vw] hover:border-green-500 sm:pl-[5vw] relative border-black rounded-xl pl-3 sm:ml-[vw] mb-[3vh]"
      />

     <div className="flex flex-col  sm:mt-[-3.5vh] md:mt-[-3.5vh] md:ml-[-1vw]">
        <label htmlFor="opciones" className="sm:ml-3 md:ml-[2vw]">Cantidad</label>
        <select id="opciones" className="bg-gray-400 sm:ml-[2vw] rounded px-3" onChange={obtenerOpcion}>
          <option value="0"></option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
     </div>
    </div>
  );
};

export default InputTabla;

