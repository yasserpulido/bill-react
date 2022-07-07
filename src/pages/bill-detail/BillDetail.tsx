import React, { useReducer } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}

interface BillState {
  fullName: string;
  cuilCuit: number;
  dni: number;
  amount: number;
  date: string;
}

interface BillAction {
  type: string;
  payload: string;
}

const reducer = (state: BillState, action: BillAction) => {
  const { type, payload } = action;
  switch (type) {
    case "FULLNAME_INPUT":
      return { ...state, fullName: payload };
    default:
      return state;
  }
};

const initialState = {
  fullName: "",
  cuilCuit: 0,
  dni: 0,
  amount: 0,
  date: new Date().toString(),
};

const BillDetail: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fullNameHandler = (event: BaseSyntheticEvent) => {
    dispatch({ type: "FULLNAME_INPUT", payload: event.target.value });
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: "FULLNAME_INPUT", payload: event.target.value });
  };

  return (
    <Container>
      <Form className="border rounded p-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={state.fullName}
            type="text"
            onChange={fullNameHandler}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCuilCuit">
            <Form.Label>CUIL / CUIT</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDNI">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default BillDetail;
