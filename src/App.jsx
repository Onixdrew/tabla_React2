import React, { useState } from "react";
import "./ComponentesEntregable/tabla.css";
import Tabla from "./ComponentesEntregable/tabla.jsx";
import InputTabla from "./ComponentesEntregable/inputTabla.jsx";


function App() {
  const [buscarApp, setBuscarApp] = useState("");

  const actualizarBuscarApp = (nuevoValor) => {
    setBuscarApp(nuevoValor);
  };

  const personas = [
    {
      id: 1,
      nombre: "francisco Martinez ",
      Descripción: "aprendiz",
      
    },
    {
      id: 2,
      nombre: "Luis Jimenesz",
      Descripción: "funcionario",
      
    },
    {
      id: 3,
      nombre: "Andres Mosquera",
      Descripción: "aprendiz",
    },
    {
      id: 4,
      nombre: "sandra Lopez",
      Descripción: "instructor",
     
    },
    {
      id: 5,
      nombre: "Gabriel Mars",
      Descripción: "administrador",
      
    },
  ];

  return (
    <div>
      
      
      <div className="mt-[18vh] ml-[20vw]">
        <InputTabla onBuscarChange={actualizarBuscarApp}></InputTabla>
        <Tabla arreglo={personas} buscar={buscarApp}></Tabla>
      </div>
    </div>
  );
}
export default App;
