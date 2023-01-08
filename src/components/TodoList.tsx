import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import styled from "styled-components";

const Todos = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 47.5%;
  padding: 15px;
`;

interface Props {
  inputs: Todo[];
  setInputs: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ inputs, setInputs }) => (
  <Todos>
    {inputs.map((todo) => (
      <SingleTodo
        todo={todo}
        key={todo.id}
        inputs={inputs}
        setInputs={setInputs}
      />
    ))}
  </Todos>
);

export default TodoList;
