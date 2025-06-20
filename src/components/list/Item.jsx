import { Link } from "react-router-dom";

function Item({ teacherToShow }) {
  return (
    <>
      <span>
        <img
          className="photo_teacher"
          src={teacherToShow.photo}
          alt={"Foto de ${teacherToShow.name}"}
        />
      </span>
      <span>
        <h3 className="name_teacher">{teacherToShow.name}</h3>
        <p>{teacherToShow.number_of_classes}</p>
        <h4 className="instrumet_to_teach">{teacherToShow.instrument}</h4>
        <p>Habla {teacherToShow.language}</p>
        <p className="ad_title">{teacherToShow.ad_title}</p>
        <p className="ad_description">{teacherToShow.ad_desc}</p>
        <Link
          className="see_more_teacher_item"
          to={`/teacher-detail/${
            teacherToShow.id
          }/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
        >
          Ver Más...
        </Link>
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
