import './App.css';
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Category from './components/Category';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';




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

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
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
const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Wrapper = styled.div`
  /* max-width: 768px; */
  /* margin: 40px auto; */
  background-color: lightblue;
  /* overflow-x: hidden; */  // TODO : Main만들고 주석 풀기
  /* height: 900px;   // TODO : 자식 css 작업 끝나고 삭제! */
  /* overflow-y: auto; */
  /* @media screen and (max-width:767px){
    width: 100%;
    margin: 0px;
  } */
`;

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/category' element={<Category />}/>
        </Routes>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
