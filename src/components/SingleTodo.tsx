import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

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
    <form className="todos--single" onSubmit={(e) => Edit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos--single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos--single--text">{todo.todo}</s>
      ) : (
        <span className="todos--single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => Delete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => Done(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
