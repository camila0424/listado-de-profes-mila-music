import Item from "./Item";
function List(allTeachers) {
  return (
    <ul>
      {allTeachers.map((teacher, id) => (
        <li className="teacher_card" key={id}>
          <Item teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}

export default List;
