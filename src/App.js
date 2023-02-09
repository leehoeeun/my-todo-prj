import './App.css';
import React, { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Category from './components/Category';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoListDetailPop from './components/TodoListDetailPop';



// --------------테마 만들기---------------------------
// Define what props.theme will look like
const theme = {
  white: '#fff',
  black: '#000',
  grayBackground: '#dfdfdf',
  disabled: '#f7f7f7',
  gray100: '#f1f1f1',
  gray200: '#eee',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#777',
  gray700: '#555',
  gray800: '#333',
  gray900: '#111',
  blue: '#41a1ea',
  indigo: '#727cf5',
  purple: '#6b5eae',
  pink: '#ff679b',
  red: '#f05b5b',
  orange: '#fd7e14',
  yellow: '#ffbc00',
  green: '#0acf97',
  teal: '#02a8b5',
  cyan: '#39afd1',
  bodyBg: '#f4f5f6',
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// -------------공통 css 적용----------------------------
const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 10px;
    color: #333;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    color: #333;
    background-color: #e9ecef;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  img {
  display: block;
  }
`;
const Wrapper = styled.div`
  background-color: lightblue;
  overflow-x: hidden;  // TODO : Main만들고 주석 풀기
  /* @media screen and (max-width:767px){
    width: 100%;
    margin: 0px;
  } */
`;

const App = props => {

  // --------------메뉴---------------------------
  const [ menus, setMenus ] = useState([
    {
      id: 1,
      depth1 : '카테고리',
      depth2s : ['공부', '교회일', '기타', '구매목록']
    },
    {
      id: 2,
      depth1 : '할 일',
      depth2s : ['지난주', '이번주', '다음주']
    },
  ]);
  // console.log(menus[0].depth2s);

  const categorys = [
    {
      id: 1,
      title: '공부',
      total: 10,
      finish: 7,
      notyet: 3,
    },
    {
      id: 2,
      title: '교회일',
      total: 5,
      finish: 1,
      notyet: 4,
    },
    {
      id: 3,
      title: '기타',
      total: 8,
      finish: 4,
      notyet: 4,
    },
  ];
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      month: 1,
      week: 1,
      title: 'c-study',
      text: 'TODOLIST 만들기1',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다1-1',
      buying: false,
      checked: false,
      important: 1,
    },
    {
      id: uuidv4(),
      month: 1,
      week: 1,
      title: 'c-church',
      text: '겨울 수련회 준비1',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다1-2',
      buying: false,
      checked: false,
      important: 2,
    },
    {
      id: uuidv4(),
      month: 1,
      week: 2,
      title: 'c-study',
      text: 'TODOLIST 만들기2',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다2-1',
      buying: false,
      checked: false,
      important: 1,
    },
    {
      id: uuidv4(),
      month: 1,
      week: 2,
      title: 'c-church',
      text: '겨울 수련회 준비2',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다2-2',
      buying: false,
      checked: false,
      important: 5,
    },
    {
      id: uuidv4(),
      month: 1,
      week: 3,
      title: 'c-study',
      text: 'TODOLIST 만들기3',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다3-1',
      buying: false,
      checked: false,
      important: 3,
    },
    {
      id: uuidv4(),
      month: 1,
      week: 3,
      title: 'c-church',
      text: '겨울 수련회 준비3',
      content: 'React로 todolist를 만들어 프로젝트를 완성한다3-2',
      buying: false,
      checked: false,
      important: 4,
    },
  ]);

  // -------------------checkbox checked Toggle 기능----------------------
  const handleToggle = useCallback((id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
    // TODO : 로컬 스토리지에 저장
  //   localStorage.setItem('todos', JSON.stringify(todos.map((todo) =>
  //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
  // )));
  }, [todos]);

  // -------------------submit할 때 추가 되도록 하는 코드----------------------
  const handleInsert = useCallback((data) => {
    const { month, week, title, text, content, buying, important } = data;
    
    const todo = {
      id: uuidv4(),
      month,
      week,
      title,
      text,
      content,
      buying,
      checked: false,
      important,
    };

    setTodos(todos.concat(todo));

    // TODO : 마지막에 주석 풀기
    // 로컬 스토리지에 저장  // ('이름', JSON 문자로 변경)
    // localStorage.setItem('todos', JSON.stringify(todos.concat(todo)))
    // 배열을 JSON으로 변경필요!
  }, [todos]);

  return (
    <ThemeProvider 
      theme={theme}
    >
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header menus={menus} />
        <Routes>
          <Route path='/' element={<Main categorys={categorys} todos={todos} onToggle={handleToggle} onInsert={handleInsert} />}/>
          <Route path='/category' element={<Category />}/>
          <Route path='/detail' element={<TodoListDetailPop />} />
        </Routes>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
