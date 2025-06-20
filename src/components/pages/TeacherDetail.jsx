import { Link, useParams } from "react-router-dom";

function TeacherDetail({ allTeachers }) {
  const { id } = useParams();

  const teacherToShow = allTeachers.find((teacher) => teacher.id === id);

  return (
    <div className="detailTeacher">
      <img
        className="detail_photo_teacher"
        src={teacherToShow.photo}
        alt={teacherToShow.name}
      />
      <div>
        <h3 className="detail_name_teacher">{teacherToShow.name}</h3>
        <p>{teacherToShow.number_of_classes}</p>
        <p className="detail_instrumet_to_teach">{teacherToShow.instrument}</p>
        <p>Habla: {teacherToShow.language}</p>
        <p className="detail_cost_per_hour">
          Valor de la clase: {teacherToShow.cost_per_hour}
        </p>
        <p className="detail_ad_title">{teacherToShow.ad_title}</p>
        <p className="detail_ad_description">{teacherToShow.ad_desc}</p>
        <p className="detail_class_description">{teacherToShow.class_desc}</p>
      </div>

      <Link to="/">Volver</Link>
    </div>
  );
}

export default TeacherDetail;
