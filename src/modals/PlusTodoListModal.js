import React, { useState } from 'react';
import { Modal, Button, Form, Container } from "react-bootstrap";
import styled from 'styled-components';

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
            ??? ??? ??????
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
              <option value="january">1???</option>
              <option value="february">2???</option>
              <option value="march">3???</option>
              <option value="april">4???</option>
              <option value="may">5???</option>
              <option value="june">6???</option>
              <option value="july">7???</option>
              <option value="august">8???</option>
              <option value="september">9???</option>
              <option value="october">10???</option>
              <option value="november">11???</option>
              <option value="december">12???</option>
            </Form.Select>

            <Form.Select 
              className='plan-date' 
              aria-label="Default select example" 
              value={state.week}
              onChange={handleChange} 
              name="week"
            >
              <option>Weekly</option>
              <option value="oneweek">1???</option>
              <option value="twoweek">2???</option>
              <option value="threeweek">3???</option>
              <option value="fourweek">4???</option>
              <option value="fiveweek">5???</option>
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
                <option>????????????</option>
                <option value="c-study">??????</option>
                <option value="c-church">?????????</option>
                <option value="c-etc">??????</option>
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
              <option>???????????? ??????</option>
              <option value="one-point">1???</option>
              <option value="two-point">2???</option>
              <option value="three-point">3???</option>
              <option value="four-point">4???</option>
              <option value="five-point">5???</option>
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