import React, {useRef, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import PlusTodoListButton from './PlusTodoListButton';
import TodoListDetailPop from './TodoListDetailPop';
import TodoListItems from './TodoListItems';
import PlusTodoListModal from "../modals/PlusTodoListModal"; 
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoListWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px; // TODO: 자식 작업 하고 삭제
  padding: 20px;
  box-sizing: border-box;
  background-color: #98B5FF;
`;
const PlusTodoListButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: #EB05FF;
  cursor: pointer;
  .line-ver{
    position: absolute;
    top: 15px;
    left: 50%;
    width: 3px;
    height: 50px;
    background-color: #fff;
    transform: translateX(-50%);
  }
  .line-hor{
    position: absolute;
    top: 50%;
    left: 15px;
    width: 50px;
    height: 3px;
    background-color: #fff;
    transform: translateY(-50%);
  }
`;

function TodoList(props) {
  const {todos, onToggle, onInsert} = props;
  const [plusTodoListModalOn, setPlusTodoListModalOn] = useState(false);
  console.log(props)
  
  const nextId = useRef(4);
  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false,
    };
    // setTodos(todos.concat(todo)); 
    // nextId.current += 1;
    localStorage.setItem('todos', JSON.stringify(todos.concat(todo)))
  }, [todos]);

  return (
    <>
      <TodoListWrapper>
        <h2 style={{ marginBottom: 10 }}>This Week</h2>
        {todos.map((todo, index) => {
          return <TodoListItems key={todo.id} todo={todo} onToggle={onToggle} />
        })}
        <PlusTodoListButton
          onClick={() => setPlusTodoListModalOn(true)}
        >
          <div className='line-ver'></div>
          <div className='line-hor'></div>
        </PlusTodoListButton>

        <PlusTodoListModal onInsert={handleInsert} show={plusTodoListModalOn} onHide={()=> setPlusTodoListModalOn(false)}/>

      </TodoListWrapper>
    </>
  );
}

export default TodoList;