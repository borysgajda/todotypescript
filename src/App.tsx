import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import Header from "./components/Header"

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

  console.log(inputs);

  return (
    <div className="App">
      <Header />
      <Input todo={todo} setTodo={setTodo} Add={Add} />
      <TodoList inputs={inputs} setInputs={setInputs}/>
    </div>
  );
};

export default App;
