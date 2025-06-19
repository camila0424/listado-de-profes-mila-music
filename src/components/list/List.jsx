import { Link } from "react-router-dom";
import Item from "./Item";

function List({ allTeachers }) {
  if (!Array.isArray(allTeachers)) {
    return <p>Cargando profesores...</p>;
  }
  return (
    <ul>
      {allTeachers.map((teacher) => (
        <li className="teacher_card" key={teacher.id}>
          <Item teacherToShow={teacher} />
        </li>
      ))}
    </ul>
  );
}
export default List;
