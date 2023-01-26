import React, { FC, useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { Header } from "./components/Header";
import * as S from "./styled"

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
    <S.Container>
      <Header />
      <Input todo={todo} setTodo={setTodo} Add={Add} />
      <TodoList inputs={inputs} setInputs={setInputs} />
    </S.Container>
  );
};
export default App;
