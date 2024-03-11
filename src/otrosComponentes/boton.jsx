import React from "react";
import { useState } from "react";

const Botons = () => {
  const [valor, setValor] = useState(0);

  return (
    <div>
      < div className="flex flex-col ml-[30vw] ">
            <h1 className="text-[5em] ">{valor}</h1>
            <div className="flex space-x-6">
                <button
                className=" w-[4vw] rounded-md text-[3em] bg-green-600   text-white"
                onClick={() => setValor(valor + 1)}
                >
                +
                </button>
                <button
                className=" w-[4vw] rounded-md text-[3em] bg-green-600   text-white"
                onClick={() => setValor(valor - 1)}
                >
                -
                </button>
            </div>
        </div>
    </div>
  );
};

export default Botons;
