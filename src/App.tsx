import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 100) + 1, todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  console.log("t", todos);

  return (
    <div className="App">
      <span className="heading">Tasks Scheduler</span>
      <InputField todo={todo} setTodo={setTodo} addTask={addTask} />
    </div>
  );
};

export default App;
