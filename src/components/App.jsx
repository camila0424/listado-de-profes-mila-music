import { useState, useEffect } from "react";
/* import { useLocation } from "react-router-dom"; */
import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import List from "./list/list";
import FormInput from "./list/Form";

function App() {
  const [allTeachers, setAllTeachers] = useState([]);
  const [filterInstrument, setFilterInstrument] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("");

  /* const location = useLocation(); */

  const handleInputFilterInstrument = (ev) => {
    setFilterInstrument(ev.target.value);
  };

  function handleChange(event) {
    setSelectedLanguage(event.target.value);
  }

  const filteredTeachers = allTeachers.filter(
    (teacher) =>
      teacher.language.toLowerCase().includes(selectedLanguage.toLowerCase()) &&
      teacher.instrument.toLowerCase().includes(filterInstrument.toLowerCase())
  );
  useEffect(() => {
    fetch("./data/da.json")
      .then((res) => res.json())
      .then((data) => {
        setAllTeachers(data);
      });
  }, []);

  return (
    <>
      <header>
        <a href="./">
          {" "}
          <img
            className="logo_header_lis_teachers"
            src="./images/logo__final.png"
            alt="Esta es la imagen del logo de Mila Music"
          />{" "}
        </a>
      </header>
      <FormInput
        handleInputFilterInstrument={handleInputFilterInstrument}
        selectedLanguage={selectedLanguage}
        filterInstrument={filterInstrument}
        handleChange={handleChange}
      />
      <main>
        <Routes>
          <Route
            path="/detail/:instrument"
            element={<List allTeachers={filteredTeachers} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
