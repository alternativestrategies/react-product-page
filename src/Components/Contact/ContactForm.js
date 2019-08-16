import React, {useState} from 'react';
import {Form, Col, Container,  Row} from 'react-bootstrap';

const ContactForm = () => {

  const [validated, setValidated] = useState(false);

  const handleForm = (e) => {
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  }
return(
<div className="no-bg pb-4 pt-4">
  <h2>Contact Us</h2>
<Container>
<Row>
<Col xs={10} md={7} className="mx-auto mt-4 mb-3">
<Form noValidate validated={validated} onSubmit={handleForm}>
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      placeholder="First Name" />
      <Form.Control.Feedback type="invalid">Please enter first name</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      placeholder="Last Name" />
      <Form.Control.Feedback type="invalid">Please enter last name</Form.Control.Feedback>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control 
    required
    type="email"
    placeholder="Email Address" />
    <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
  <Form.Label>Topic</Form.Label>
      <Form.Control 
      required
      as="select">
              <option selected value="">Choose...</option>
              <option value="customerService">Customer Service</option>
              <option value="shipping">Shipping Issues</option>
              <option value="pr">PR/ Marketing/ Interview</option>
              <option value="other">Other</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">Topic is required</Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="comments">
    <Form.Label>Comments</Form.Label>
    <Form.Control 
    required
    as="textarea" 
    rows="3"
    placeholder="Comments"/>
    <Form.Control.Feedback type="invalid">Comment is required</Form.Control.Feedback>
  </Form.Group>

<div className="text-center">
<button className="btn-form" type="submit">
    Submit
  </button>
</div>
</Form>
            </Col>
        </Row>
        </Container>

    </div>
    );
}

export default ContactForm;