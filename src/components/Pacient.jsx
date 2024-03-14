import React from "react";

const Pacient = () => {
  return (
    <div className="mx-5 my-10 bg-white px-5 py-10 rounded-xl shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""} <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""} <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""} <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""} <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          dignissimos autem consequatur veritatis velit ducimus nam dolorem.
          Iusto eveniet architecto dicta rerum blanditiis obcaecati sint
          provident! Harum ducimus molestiae ab?
        </span>
      </p>
    </div>
  );
};

export default Pacient;
