function FormInput({
  handleInputFilterInstrument,
  selectedLanguage,
  filterInstrument,
  handleChange,
}) {
  return (
    <form action="#" className="filtered-search">
      <input
        className="search-instrument"
        type="text"
        onInput={handleInputFilterInstrument}
        value={filterInstrument}
        name="search-instrument"
        id="search-instrument"
        placeholder="Escribe un Intrumento "
      />
      {/* <select className="schedule" name="schedule" id="schedule">
          <option value="" disabled selected hidden>
            Preferencia de horario
          </option>
          <option value="morning">Mañana (entre 8am y 2pm)</option>
          <option value="afternoon">Tarde (entre 3pm y 8pm)</option>
        </select> */}

      <select
        className="language"
        name="language"
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
      >
        <option value="" disabled selected hidden>
          Idioma de la clase
        </option>
        <option value="español">Español</option>
        <option value="english">Inglés</option>
        <option value="french">Francés</option>
        <option value="italian">Italiano</option>
      </select>
    </form>
  );
}

export default FormInput;
