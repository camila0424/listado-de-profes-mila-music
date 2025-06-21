import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ContactTeacher({ allTeachers }) {
  const { id } = useParams();
  const teacherToShow = allTeachers.find((teacher) => teacher.id === id);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (teacherToShow) {
      setMessage(
        `Hola, ${teacherToShow.name}. Me llamo Maricarmen y busco un profe de ${teacherToShow.instrument}. Me gustaría tener clases en línea. Quisiera poder empezar lo antes posible. ¿Qué te parece? ¿Podrías contactarme para que nos pongamos de acuerdo? ¡Que tengas un buen día! Hasta pronto, Maricarmen.`
      );
    }
  }, [teacherToShow]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  console.log("allTeachers en ContactTeacher:", allTeachers);
  console.log("id recibido:", id);
  if (!teacherToShow) {
    return <p>Cargando datos...</p>;
  }
  return (
    <>
      <form className="form_contact_teacher">
        <h2 className="other_titles_contact_teacher">Planifica</h2>
        <p>Tu primera clase con {teacherToShow.name}</p>
        <img
          className="photo_teacher_contact_teacher"
          src={teacherToShow.photo}
          alt={"Foto de ${teacherToShow.name}"}
        />
        <label
          htmlFor="Vuestro mensaje"
          className="other_titles_contact_teacher"
        >
          Vuestro mensaje
        </label>
        <textarea
          id="message"
          value={message}
          onChange={handleChange}
          rows={8}
          className="text_contact_teacher"
        />

        <h3 className="other_titles_contact_teacher">Tus datos de contacto</h3>
        <p className="text_contact_teacher">
          Esta información será compartida únicamente con los/as profes que tú
          escojas.
        </p>
        <h3 className="other_titles_contact_teacher">Dirección Postal</h3>
        <input
          type="text"
          placeholder="Tu domicilio postal"
          className="text_contact_teacher"
        />
        <h3 className="other_titles_contact_teacher">Número de teléfono</h3>
        <input
          type="number"
          placeholder="Móvil"
          className="text_contact_teacher "
        />
        <button type="submit" className="submit_btn_contact_teacher">
          Enviar
        </button>
      </form>

      <Link className="return_btn_contact_teacher" to="/">
        Volver
      </Link>
    </>
  );
}

export default ContactTeacher;
