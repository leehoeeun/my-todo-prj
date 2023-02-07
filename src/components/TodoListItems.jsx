import React from 'react';
import { MdCheckBox as CheckOn, MdCheckBoxOutlineBlank as CheckOff , MdIndeterminateCheckBox as CheckDelete } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TodoListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    height: 60px;
    color: #fff;
    padding: 18px 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #031956;
    .title {
      flex: 1;
    }

`;
const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    font-size: 3rem;
    color: ${props => props.checked && '#EB05FF'}
  }
`;

// const Text = styled.div`
//   margin-left: 0.5rem;
//   flex: 1;
//   ${props => props.checked &&
//     css`
//       color: #adb5bd;
//       text-decoration: line-through;
//     `}
// `;
// const TodoListBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 80%;
//   height: 60px;
//   padding: 10px 10px;
// `;


function TodoListItems(props) {
  const { todo, onToggle } = props;
  const {id, text, checked} = todo;
  const navigate = useNavigate();
  return (
    <TodoListItemWrapper>
      <Checkbox checked={checked} onClick={() => { onToggle(id); }} >
        {checked? <CheckOn /> : <CheckOff/>}
      </Checkbox>
      <p 
        className='title'
        onClick={() => { navigate('/detail') }}  // TODO: 리스트 box를 누르면 해당 관련 내용의 팝업이 나오도록 수정
      >
        {text}
      </p>
    </TodoListItemWrapper>
  );
}

export default TodoListItems;