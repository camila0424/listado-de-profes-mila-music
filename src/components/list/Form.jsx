function FormInput({
  handleInputFilterInstrument,
  selectedLanguage,
  filterInstrument,
  handleChange,
}) {
  return (
    <form className="filtered-search">
      <input
        className="search-instrument"
        type="text"
        onInput={handleInputFilterInstrument}
        value={filterInstrument}
        placeholder="Escribe un instrumento"
      />
      <select
        className="language"
        value={selectedLanguage}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          Idioma de la clase
        </option>
        <option value="Español">Español</option>
        <option value="English">Inglés</option>
        <option value="Francés">Francés</option>
      </select>
    </form>
  );
}

export default FormInput;
