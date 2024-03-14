import React, { useState } from "react";
import "./ComponentesEntregable/tabla.css";
import Tabla from "./ComponentesEntregable/tabla.jsx";
import InputTabla from "./ComponentesEntregable/inputTabla.jsx";

function App() {
  const [buscarApp, setBuscarApp] = useState("");
  const [opcionApp, setOpcionApp] = useState("");

  // funcion que se va a usar en el input y actualiza a buscarApp
  const actualizarBuscarApp = (nuevoValor) => {
    setBuscarApp(nuevoValor);
  };
  
  const actualizarOpcionApp = (valorOpcion) => {
    setOpcionApp(valorOpcion);
  };
 
  // Lista de personas
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
      nombre: "Juan Pérez",
      Descripción: "funcionario",
    },
    {
      id: 6,
      nombre: "María Rodríguez",
      Descripción: "administrador",
    },
    {
      id: 7,
      nombre: "Pedro Gómez",
      Descripción: "administrador",
    },
    {
      id: 8,
      nombre: "Ana Martínez",
      Descripción: "funcionario",
    },
    {
      id: 9,
      nombre: "Luis Sánchez",
      Descripción: "aprendiz",
    },
    {
      id: 10,
      nombre: "Laura González",
      Descripción: "aprendiz",
    },
    {
      id: 11,
      nombre: "Carlos López",
      Descripción: "funcionario",
    },
    {
      id: 12,
      nombre: "Sofía Fernández",
      Descripción: "administrador",
    },
    {
      id: 13,
      nombre: "Diego Pérez",
      Descripción: "administrador",
    },
    {
      id: 14,
      nombre: "Lucía Rodríguez",
      Descripción: "funcionario",
    },
    {
      id: 15,
      nombre: "Elena García",
      Descripción: "aprendiz",
    },
    {
      id: 16,
      nombre: "Mario Martínez",
      Descripción: "administrador",
    },
    {
      id: 17,
      nombre: "Marina Sánchez",
      Descripción: "administrador",
    },
    {
      id: 18,
      nombre: "Javier González",
      Descripción: "aprendiz",
    },
    {
      id: 19,
      nombre: "Sara López",
      Descripción: "funcionario",
    },
    {
      id: 20,
      nombre: "Paula Martínez",
      Descripción: "funcionario",
    },
    {
      id: 21,
      nombre: "Adrián Fernández",
      Descripción: "funcionario",
    },
    {
      id: 22,
      nombre: "Marta García",
      Descripción: "aprendiz",
    },
    {
      id: 23,
      nombre: "Alberto Rodríguez",
      Descripción: "administrador",
    },
    {
      id: 24,
      nombre: "Clara Pérez",
      Descripción: "aprendiz",
    },
    {
      id: 25,
      nombre: "Eva Martínez",
      Descripción: "administrador",
    },
    {
      id: 26,
      nombre: "Daniel López",
      Descripción: "funcionario",
    },
    {
      id: 27,
      nombre: "Natalia Sánchez",
      Descripción: "funcionario",
    },
    {
      id: 28,
      nombre: "Hugo González",
      Descripción: "aprendiz",
    },
    {
      id: 29,
      nombre: "Ana Belén Rodríguez",
      Descripción: "administrador",
    },
    {
      id: 30,
      nombre: "Miguel Martín",
      Descripción: "administrador",
    }
  ];

  return (
    <div>
      <div className="mt-[18vh] lg:ml-[30vw] sm:ml-[20vw]">
        <div className=" sm:ml-[7vw] md:ml-[4vw] md:mb-5"><InputTabla onBuscarChange={actualizarBuscarApp} opcionApp={actualizarOpcionApp}></InputTabla></div>
        <Tabla arreglo={personas} buscar={buscarApp} NumOpcion={opcionApp} ></Tabla>
        <h1 className="sm:ml-[20vw] md:ml-[10vw] md:mb-[30vh] sm:mt-4 text-xl font-bold">{opcionApp} de {personas.length}</h1>
      </div>
    </div>
  );
}
export default App;
