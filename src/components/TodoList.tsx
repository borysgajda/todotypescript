import React from 'react'
import { Todo } from "../model"
import SingleTodo from './SingleTodo';
import "./styles.css";

interface Props{
    inputs: Todo[]
    setInputs: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

  const TodoList: React.FC<Props> = ({inputs, setInputs}) => 
    <div className="todos">
        {inputs.map(todo => (
            <SingleTodo todo={todo} key={todo.id}
            inputs={inputs}
            setInputs={setInputs}/>
        ))}
    </div>

export default TodoList;