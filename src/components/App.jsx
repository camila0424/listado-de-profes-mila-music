import { useState, useEffect } from "react";

import { Link, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import ListingTeachers from "./listing_teachers/ListingTeachers";
import FormTeachersList from "./listing_teachers/FormTeachersList";
import TeacherDetail from "./pages/TeacherDetail";

function App() {
  const [allTeachers, setAllTeachers] = useState([]);
  const [filterInstrument, setFilterInstrument] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState("");

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
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos cargados:", data);
        setAllTeachers(data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          {" "}
          <img
            className="logo_header_lis_teachers"
            src="./images/logo__final.png"
            alt="Esta es la imagen del logo de Mila Music"
          />{" "}
        </Link>
      </header>

      <FormTeachersList
        handleInputFilterInstrument={handleInputFilterInstrument}
        selectedLanguage={selectedLanguage}
        filterInstrument={filterInstrument}
        handleChange={handleChange}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ListingTeachers allTeachers={filteredTeachers} />}
          />
          <Route
            path="/teacher-detail/:id/:name"
            element={<TeacherDetail allTeachers={allTeachers} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
