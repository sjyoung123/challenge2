import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <>
      <CreateToDo />
      <ul>
        {toDos.map((data) => (
          <ToDo key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
}
