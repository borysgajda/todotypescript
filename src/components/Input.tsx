import React, { useRef } from "react";
import Button from "./styled/button";
import styled from "styled-components";
import Boxx from "./styled/box";

const Box = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;
const Innput = styled.form`
  display: flex;
  width: 47.5%;
  position: relative;
  align-items: center;
`;

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Add: (e: React.FormEvent) => void;
}
const Input = ({ todo, setTodo, Add }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Innput
      onSubmit={(e: React.FormEvent<Element>) => {
        Add(e);
        inputRef.current?.blur();
      }}
    >
      <Box
        ref={inputRef}
        placeholder="Wpisz swoje zadanie"
        value={todo}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setTodo(e.target.value)
        }
      />
      <Button />
    </Innput>
  );
};
export default Input;
