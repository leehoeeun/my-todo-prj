import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import TodoListDetailPop from './TodoListDetailPop';
import TodoListItems from './TodoListItems';

const TodoListWrapper = styled.div`
  width: 100%;
  height: 800px; // TODO: 자식 작업 하고 삭제
  padding: 20px;
  box-sizing: border-box;
  background-color: #98B5FF;
`;


function TodoList(props) {
  const {todos, onToggle} = props;
  console.log(todos);

  return (
    <>
      <TodoListWrapper>
        <h2 style={{ marginBottom: 10 }}>This Week</h2>
        {todos.map((todo, index) => {
          return <TodoListItems key={todo.id} todo={todo} onToggle={onToggle} />
        })}
      </TodoListWrapper>
    </>
  );
}

export default TodoList;