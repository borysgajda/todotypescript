import React, { useRef } from "react";
import * as S from "../styled";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Add: (e: React.FormEvent) => void;
}
const Input = ({ todo, setTodo, Add }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <S.Input
      onSubmit={(e: React.FormEvent<Element>) => {
        Add(e);
        inputRef.current?.blur();
      }}
    >
      <S.Box
        ref={inputRef}
        placeholder="Enter your task"
        value={todo}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setTodo(e.target.value)
        }
      />
      <S.Button>+</S.Button>
    </S.Input>
  );
};
export default Input;
