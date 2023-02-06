import { FormEvent, useRef } from "react";
import "../assets/css/custom.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: FormEvent) => void;
}

const InputField = ({ todo, setTodo, addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTask(e);
        inputRef.current?.blur();
      }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input-box"
      />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default InputField;
