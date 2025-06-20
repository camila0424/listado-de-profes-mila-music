import { Link, useParams } from "react-router-dom";

function ContactTeacher({ allTeachers }) {
  const { id } = useParams();
  const teacherToShow = allTeachers.find((teacher) => teacher.id === id);

  if (!teacherToShow) return <p>Profesor no encontrado</p>;
  return (
    <>
      <form action="">
        <h2>Planifica</h2>
        <p>Tu primera clase con {teacherToShow.name}</p>
        <img
          className="photo_teacher_card"
          src={teacherToShow.photo}
          alt={"Foto de ${teacherToShow.name}"}
        />
        <h2>Vuestro mensaje</h2>
        <textarea name="message" id="message">
          Hola, {teacherToShow.name}. Me llamo Camila y busco un profe de
          Guitarra. Me gustaría tener clases en línea. Quisiera poder empezar lo
          antes posible. ¿Qué te parece? ¿Podrías contactarme para que nos
          pongamos de acuerdo? ¡Que tengas un buen día! Hasta pronto, Camila
        </textarea>
        <h2>Tus datos de contacto</h2>
        <p>
          Esta información será compartida únicamente con los/as profes que tú
          escojas.
        </p>
        <h3>Dirección Postal</h3>
        <input type="cp" placeholder="Tu domicilio postal" />
        <h3>Número de teléfono</h3>
        <input type="number" placeholder="Móvil" />
      </form>
      <Link className="detail_return_btn" to="/">
        Volver
      </Link>
    </>
  );
}

export default ContactTeacher;
