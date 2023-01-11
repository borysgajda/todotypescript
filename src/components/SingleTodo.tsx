import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import * as S from "../styled"

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
  const markAsDeleted = (id: number) => {
    setInputs(inputs.filter((todo) => todo.id !== id));
  };

  const markAsDone = (id: number) => {
    setInputs(
      inputs.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <S.Single onSubmit={(e) => Edit(e, todo.id)}>
      {edit && !todo.isDone && (
        <S.InputSingleText
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      )}
      {!edit && todo.isDone && <S.SingleText>{todo.todo}</S.SingleText>}
      {!edit && !todo.isDone && <S.SingleText>{todo.todo}</S.SingleText>}
      <div>
        <S.Icon
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </S.Icon>
        <S.Icon onClick={() => markAsDeleted(todo.id)}>
          <AiFillDelete />
        </S.Icon>
        <S.Icon onClick={() => markAsDone(todo.id)}>
          <MdDone />
        </S.Icon>
      </div>
    </S.Single>
  );
};

export default SingleTodo;