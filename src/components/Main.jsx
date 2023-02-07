import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import TodoList from './TodoList';

const styles = {
  mainTitle: {
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    fontWeight: 600,
  },
}

function Main(props) {
  const { categorys } = props;
  return (
    <>
      <h1 style={styles.mainTitle}>Your Weekly Plan!</h1>
      <Category categorys={categorys}/>
      <TodoList />
    </>
  );
}

export default Main;