import { useState, useEffect } from "react";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PacientList from "./components/PacientList";
export function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});
  //Por lo general que vaya antes
  useEffect(() => {
    const getLocalStorage = () => {
      const listPacientLS =
        JSON.parse(localStorage.getItem("listPacients")) ?? [];
      setPacients(listPacientLS);
    };
    getLocalStorage();
  }, []);
  useEffect(() => {
    localStorage.setItem("listPacients", JSON.stringify(pacients));
  }, [pacients]);
  const deletePacient = (id) => {
    const newListPacients = pacients.filter((pacient) => {
      return pacient.id !== id;
    });
    setPacients(newListPacients);
  };
  return (
    <div className="container mx-5 mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Form
          pacient={pacient}
          pacients={pacients}
          setPacients={setPacients}
          setPacient={setPacient}
        ></Form>
        <PacientList
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        ></PacientList>
      </div>
    </div>
  );
}
