import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const InputTabla = ({ onBuscarChange }) => {
  const [buscar, setBuscar] = useState("");
  
  const actualizarBuscar = (e) => {
    const nuevoValor = e.target.value;
    setBuscar(nuevoValor);
    onBuscarChange(nuevoValor); 
  };
 
  return (
    <div>
      <FaSearch className="lg:ml-[10.5vw] sm:ml-[11vw] sm:mt-[0.6vw]  lg:mt-[0.5vh] text-lg absolute z-10 "/>
      <input
        type="text"
        placeholder="Buscar"
        value={buscar}
        onChange={actualizarBuscar}
        className="border-2 lg:pl-[2vw] sm:pl-[5vw] relative border-black rounded-xl pl-3 ml-[10vw] mb-[3vh]"
      />
    </div>
  );
};

export default InputTabla;