import React, { useState } from "react";
import "./App.css";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import Header from "./components/Header"
import AddPage from "./components/AddPage"
import Input from "./components/Input";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  const [inputs, setInputs] = useState<Todo[]>([]);
  const Add = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setInputs([...inputs,{id:Date.now(),
                            todo:todo,
                            isDone:false}])
    setTodo("");
    }
  };
  return (
    <div className="App">
      <Header />
      <Input todo={todo} setTodo={setTodo} Add={Add} />
      <TodoList inputs={inputs} setInputs={setInputs}/>
      <AddPage todo={todo} setTodo={setTodo} Add={Add} />
    </div>
  );
};
export default App;