import { Link } from "react-router-dom";

function TeacherItem({ teacherToShow }) {
  return (
    <>
      <span>
        <img
          className="photo_teacher_card"
          src={teacherToShow.photo}
          alt={"Foto de ${teacherToShow.name}"}
        />
      </span>
      <span>
        <h3 className="name_teacher_card">{teacherToShow.name}</h3>
        <p>{teacherToShow.number_of_classes}</p>
        <h4 className="instrumet_to_teach_card">{teacherToShow.instrument}</h4>
        <p>Habla {teacherToShow.language}</p>
        <p className="ad_title_card">{teacherToShow.ad_title}</p>
        <p className="ad_description_card">{teacherToShow.ad_desc}</p>
        <Link
          className="see_more_teacher_item_card"
          to={`/teacher-detail/${
            teacherToShow.id
          }/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
        >
          Ver Más...
        </Link>
      </span>
      <span className="buttons_teacher_card">
        <a href="*" className="check_availability_btn_card">
          Ver disponibilidad
        </a>
        <Link
          to={`/contact-teacher/${
            teacherToShow.id
          }/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
          className="contact_btn_card"
        >
          Contactar
        </Link>
      </span>
    </>
  );
}

export default TeacherItem;
