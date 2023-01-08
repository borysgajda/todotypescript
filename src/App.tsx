import React, { FC, useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { Header } from "./components/Header";
import styled from "styled-components";

const Appa = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
`;

const App: FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  const [inputs, setInputs] = useState<Todo[]>([]);
  const Add = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setInputs([
        ...inputs,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  return (
    <Appa>
      <Header />
      <Input todo={todo} setTodo={setTodo} Add={Add} />
      <TodoList inputs={inputs} setInputs={setInputs} />
    </Appa>
  );
};
export default App;
