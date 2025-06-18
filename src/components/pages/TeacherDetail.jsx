import { Link, useParams } from "react-router-dom";

function TeacherDetail({ allTeachers }) {
  const { instrument } = useParams();

  const teacherToShow = allTeachers.find(
    (teacher) => teacher.instrument === instrument
  );

  return (
    <div className="detailActors">
      <img
        className="photo_teacher"
        src={teacherToShow.photo}
        alt={teacherToShow.name}
      />
      <div>
        <h3 className="name_teacher">{teacherToShow.name}</h3>
        <p>{teacherToShow.number_of_classes}</p>
        <p className="instrumet_to_teach">{teacherToShow.instrument}</p>
        <p>Habla: {teacherToShow.language}</p>
        <p className="ad_title">{teacherToShow.ad_title}</p>
        <p className="ad_description">{teacherToShow.ad_desc}</p>
      </div>

      <Link to="/">Volver</Link>
    </div>
  );
}

export default TeacherDetail;
