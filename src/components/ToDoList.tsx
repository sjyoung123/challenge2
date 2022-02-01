import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export default function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const [toDos, setToDos] = useRecoilState(toDoState);

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo")} placeholder="Write a To do." />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((data) => (
          <li key={data.id}>{data.text}</li>
        ))}
      </ul>
    </>
  );
}
