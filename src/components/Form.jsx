import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacient, pacients, setPacients }) => {
  const [namePet, setNamePet] = useState("");
  const [properyPet, setPropertyPet] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);
  const generateId =
    Date.now().toString + Math.random().toString(36).substring(2);
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([namePet, properyPet, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const pacient = {
      namePet,
      properyPet,
      email,
      date,
      symptoms,
      id: generateId
    }

    setPacients([...pacients, pacient]);
    setNamePet("");
    setPropertyPet("");
    setDate("");
    setEmail("");
    setSymptoms("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
      >
        {error && (
          <Error>Todos los campos son obligatorios</Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="namePet"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name=""
            id="namePet"
            placeholder="Nombre Mascota"
            value={namePet}
            onChange={(e) => {
              setNamePet(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nameProperty"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name=""
            id="nameProperty"
            placeholder="Nombre del Propietario"
            value={properyPet}
            onChange={(e) => {
              setPropertyPet(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            name=""
            id="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name=""
            id="alta"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            className="border-5 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="symptoms"
            cols="30"
            rows="10"
            placeholder="Describe los sinstomas"
            value={symptoms}
            onChange={(e) => {
              setSymptoms(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          type="submit"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
