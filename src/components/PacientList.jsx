import React from "react";
import Pacient from "./Pacient";
const PacientList = ({ pacients, setPacient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacients && pacients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacients.map((pacient) => {
            return (
              <Pacient
                key={pacient.id}
                pacient={pacient}
                setPacient={setPacient}
              ></Pacient>
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{""}
            <span className="text-indigo-600 font-bold">
              y aparecerán este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PacientList;
