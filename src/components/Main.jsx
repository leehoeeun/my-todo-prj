import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import TodoList from './TodoList';


const Headerone = styled.h1`
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  font-weight: 600px;
`;



function Main(props) {
  const { categorys, todos, onToggle, onInsert } = props;

  return (
    <>
      <Headerone>Your Weekly Plan!</Headerone>
      <Category categorys={categorys}/>
      <TodoList todos={todos} onToggle={onToggle} onInsert={onInsert} />
    </>
  );
}

export default Main;