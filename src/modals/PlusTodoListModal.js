import React from 'react';
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

const PlusTodoListModal = ({ show, onHide }) => {
  console.log(onHide);
  return (
    <Container>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
            <Form.Select size="lg" className='plan-date' aria-label="Default select example">
              <option>Month</option>
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </Form.Select>
            <Form.Select className='plan-date' aria-label="Default select example">
              <option>Weekly</option>
              <option value="1">1주</option>
              <option value="2">2주</option>
              <option value="3">3주</option>
              <option value="4">4주</option>
              <option value="5">5주</option>
            </Form.Select>
          </SelectWrapper>

          <InputWrapper>
            <CategoryWrapper>
              <Form.Label>Select Your Plan Category</Form.Label>
              <Form.Select className='plan-category' aria-label="Default select example">
                <option>카테고리</option>
                <option value="study">공부</option>
                <option value="church">교회일</option>
                <option value="etc">기타</option>
              </Form.Select>
            </CategoryWrapper>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Todo Content</Form.Label>
              <Form.Control className='input-box' type="text" placeholder="Enter Plan Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control className='textarea-box' as="textarea" rows={3} placeholder="Enter Plan Detail"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </InputWrapper>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonWrapper>
            <Button className='submit-button button' variant="primary" type="button">
              Submit
            </Button>
            <Button className='close-button button' onClick={onHide}>Close</Button>
          </ButtonWrapper>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PlusTodoListModal;