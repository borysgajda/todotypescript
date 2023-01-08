import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styled from "styled-components";

const Single = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
  }
`;
const ISingleText = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;
const SingleText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;

type Props = {
  todo: Todo;
  inputs: Todo[];
  setInputs: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, inputs, setInputs }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const Edit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setInputs(
      inputs.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };
  const Delete = (id: number) => {
    setInputs(inputs.filter((todo) => todo.id !== id));
  };

  const Done = (id: number) => {
    setInputs(
      inputs.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Single onSubmit={(e) => Edit(e, todo.id)}>
      {edit && !todo.isDone && (
        <ISingleText
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      )}
      {!edit && todo.isDone && <SingleText>{todo.todo}</SingleText>}
      {!edit && !todo.isDone && <SingleText>{todo.todo}</SingleText>}
      <div>
        <Icon
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </Icon>
        <Icon onClick={() => Delete(todo.id)}>
          <AiFillDelete />
        </Icon>
        <Icon onClick={() => Done(todo.id)}>
          <MdDone />
        </Icon>
      </div>
    </Single>
  );
};

export default SingleTodo;
