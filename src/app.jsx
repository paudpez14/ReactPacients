import { useState } from "react";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PacientList from "./components/PacientList";
export function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  return (
    <div className="container mx-5 mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Form
          pacient={pacient}
          pacients={pacients}
          setPacients={setPacients}
        ></Form>
        <PacientList pacients={pacients} setPacient={setPacient}></PacientList>
      </div>
    </div>
  );
}
