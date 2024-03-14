import React from "react";

const Pacient = ({ pacient, setPacient }) => {
  return (
    <div className="mx-5 my-10 bg-white px-5 py-10 rounded-xl shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{pacient.namePet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{pacient.properyPet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{pacient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{pacient.date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{pacient.symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={() => setPacient(pacient)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacient;
