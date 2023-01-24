import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Add: (e: React.FormEvent) => void;
}
const Input = ({ todo, setTodo, Add }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" 
    onSubmit={(e) => {Add(e); inputRef.current?.blur();}}>
      <input
        ref ={inputRef}
        placeholder="Wpisz swoje zadanie"
        className="input--box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input--submint" type="submit">
        +
      </button>
    </form>
  );
};
export default Input;
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
        placeholder="Wpisz swoje zadanie"
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
