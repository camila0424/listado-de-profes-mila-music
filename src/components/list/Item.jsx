function Item() {
  return (
    <>
      <span>
        <img
          className="photo_teacher"
          src="./images/profesores/Helena.png"
          alt="Foto de Profesor"
        />
      </span>
      <span>
        <h3 className="name_teacher">Helena</h3>
        <p>11 clases</p>
        <h4 className="instrumet_to_teach">Guitarra</h4>
        <p>Habla Español</p>
        <p className="ad_title">
          Chica con 15 años de experiencia da clases de guitarra y canto a
          domicilio en Madrid
        </p>
        <p className="ad_description">
          Tengo el título de Estudios Profesionales en la Escuela de Música
          Creativa, Madrid. Estudié 6 años de teoría, solfeo y armonía en 2
          conservatorios en Venezuela (Escuela de Música Prudencio Esáa y
          Escuela de Música Pedro Nolasco Colón), 4 años de guitarra popular y 2
          de guitarra clásica, 3 de mandolina y 1 de canto lírico.
        </p>
        <a className="see_more_teacher_item" href="*">
          Ver Más...
        </a>
      </span>
      <span className="buttons_teacher_card">
        <a href="*" className="check_availability_btn">
          Ver disponibilidad
        </a>
        <a href="*" className="contact_btn">
          Contactar
        </a>
      </span>
    </>
  );
}

export default Item;
