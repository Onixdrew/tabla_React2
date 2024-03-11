

const Tabla = ({arreglo, buscar}) => {
  
  
  return (
    <>
      <div>
        
        <table>
          <thead>
            <tr>
              <th className="col">ID</th>
              <th className="col">Nombre</th>
              <th className="col">Descripción</th>
            </tr>
          </thead>

          <tbody>
            {arreglo
              .filter((persona) => {
                if (buscar.toLowerCase() === "") {
                  return persona;

                } else {
                  return (
                    persona.id.toString().includes(buscar.toString()) ||
                    persona.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    persona.Descripción.toLowerCase().includes(buscar.toLowerCase())
                  );
                }
              })

              .map((persona) => (
                <tr key={persona.id}>
                  <td className="col2">{persona.id}</td>
                  <td className="col2">{persona.nombre}</td>
                  <td className="col2">{persona.Descripción}</td>
              
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;
