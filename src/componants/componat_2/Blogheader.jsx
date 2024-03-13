import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Blogheader() {
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Successfully `);
    
  }  
  return (

    <div className="container ">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter the Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contant</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Post</Button>
      </Form>
    </div>
  );
}
