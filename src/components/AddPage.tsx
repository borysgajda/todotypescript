import React, { useRef } from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Add: (e: React.FormEvent) => void;
}
const AddPage = ({ todo, setTodo, Add }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input2" 
    onSubmit={(e) => {Add(e); inputRef.current?.blur();}}>
      <div className="btn22">
      {/* <Link to="./Add.js"> */}
        {" "}
        <button className="btn">+</button>
      {/* </Link>  */}
      </div>
    </form>
  );
};

export default AddPage;