import React, { useState } from 'react';
import { Modal, Button, Form, Container } from "react-bootstrap";
import styled from 'styled-components';
import { useState } from 'react';

const SelectWrapper = styled.div`
  display: flex;
  text-align: center;
  column-gap: 16px;
  .plan-date {
    height: 40px;
    font-size: 1.6rem;
  }
`;

const InputWrapper = styled.div`
  .input-box {
    height: 40px;
    font-size: 1.6rem;
  }
  .textarea-box {
    font-size: 1.6rem;
  }
`;

const CategoryWrapper = styled.div`
.plan-category {
  height: 40px;
  font-size: 1.6rem;
}
`;

const ButtonWrapper = styled.div`
  .button{
    height: 30px;
    font-size: 1.6rem;
  }
  .submit-button {
    background-color: #EB05FF;
    border: 2px solid #EB05FF;
  }
  .close-button {
    margin-left: 10px;
    background-color: #fff;
    color: #EB05FF;
    border: 2px solid #EB05FF;
  }
`;

const PlusTodoListModal = ({ show, onHide, onInsert }) => {
  // console.log(onInsert);

  // const [valueMonth, setValueMonth] = useState('');
  // const [valueWeek, setValueWeek] = useState('');
  // const [valueTitle, setValueTitle] = useState('');
  // const [valueText, setValueText] = useState('');
  // const [valueContent, setValueContent] = useState('');
  // const [valueBuying, setValueBuying] = useState('');
  // const [valueImportant, setValueImportant] = useState('');

  const [ state, setState ] = React.useState({
    month: "",
    week: "",
    title: "",
    text: "",
    content: "",
    buying: false,
    checked: false,
    important: "",
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name] : value 
    });
  }

  const handleToggle = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e) => {
    console.log(state);
    onInsert(state);
    setState('');
    e.preventDefault();
    onHide();
  };

  console.log(state);



  return (
    <Container>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onSubmit={handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            할 일 추가
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>Select Your Plan Month/Weekly</Form.Label>
          <SelectWrapper>

            <Form.Select 
              size="lg" className='plan-date'
              aria-label="Default select example"
              value={state.month}
              onChange={handleChange} name="month"
            >

              <option>Month</option>
              <option value="january">1월</option>
              <option value="february">2월</option>
              <option value="march">3월</option>
              <option value="april">4월</option>
              <option value="may">5월</option>
              <option value="june">6월</option>
              <option value="july">7월</option>
              <option value="august">8월</option>
              <option value="september">9월</option>
              <option value="october">10월</option>
              <option value="november">11월</option>
              <option value="december">12월</option>
            </Form.Select>

            <Form.Select 
              className='plan-date' 
              aria-label="Default select example" 
              value={state.week}
              onChange={handleChange} 
              name="week"
            >
              <option>Weekly</option>
              <option value="oneweek">1주</option>
              <option value="twoweek">2주</option>
              <option value="threeweek">3주</option>
              <option value="fourweek">4주</option>
              <option value="fiveweek">5주</option>
            </Form.Select>
          </SelectWrapper>

          <InputWrapper>
            <CategoryWrapper>

              <Form.Label>Select Your Plan Category</Form.Label>
              <Form.Select 
                className='plan-category' 
                aria-label="Default select example" 
                value={state.title} 
                onChange={handleChange} 
                name="title"
              >
                <option>카테고리</option>
                <option value="c-study">공부</option>
                <option value="c-church">교회일</option>
                <option value="c-etc">기타</option>
              </Form.Select>
            </CategoryWrapper>
            <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
              <Form.Label>Todo Content</Form.Label>

              <Form.Control 
                className='input-box' 
                type="text" placeholder="Enter Plan Title" 
                // value={valueText} 
                onChange={handleChange} 
                name="text" 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control 
                className='textarea-box' as="textarea" rows={3} 
                placeholder="Enter Plan Detail" 
                // value={valueContent} 
                onChange={handleChange} 
                name="content"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Check me out" 
                name="buying"
                checked={state.buying}
                onChange={handleToggle}
              />

            </Form.Group>
            <Form.Select 
              size="lg" className='plan-date' 
              aria-label="Default select example" 
              value={state.important} 
              onChange={handleChange} 
              name="important"
            >
              <option>우선순위 점수</option>
              <option value="one-point">1점</option>
              <option value="two-point">2점</option>
              <option value="three-point">3점</option>
              <option value="four-point">4점</option>
              <option value="five-point">5점</option>
            </Form.Select>
          </InputWrapper>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonWrapper>

            <Button 
              className='submit-button button' 
              variant="primary" type="button" 
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button 
              className='close-button button' 
              onClick={onHide}
            >Close</Button>
          </ButtonWrapper>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PlusTodoListModal;