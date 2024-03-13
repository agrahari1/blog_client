import React, { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
// import { signUp } from "../services/User-server";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
  const handleChange = (event, field) => {
    //dynamic setting value
    setData({ ...data, 
      [field]: event.target.value
     }
      );
  };

  // reset the form
  // const resetData=()=>{
  //     setData({
  //         name:'',
  //         email:'',
  //         password:''
  //     })
  // }

  // submit the form
  //   }
  // }

  const submitForm = async (event) => {
    
    try {
      event.preventDefault();
     
      if(error.isError){
        toast.error("Form data is invalid,currect first then submit")
      }
      
      const names = data?.name?.split(" ");
      const payload = {
        fname : names?.[0] ?? "",
        lname : names?.[1] ?? "",
        email : data?.email,
        password : data?.password
      }
     
      const res= await axios.post("http://localhost:5000/signup", payload);
      //console.log('hii')
      console.log(res)
      toast.success("User is register successfully !");
      setData({
        name: "",
        email: "",
        password: ""
      })
    } catch (error) {
      console.log(error);
      console.log("Error log")
      //handle error in proper way
      setError({
        errors:error,
        isError:true
      })
    }
  };
//handle error in proper way

  // };
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader>
              <h1>Fill Information to Register !!</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                {/* name field */}
                <FormGroup>
                  <Label for="name">Enter Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="name"
                    onChange={(e) => handleChange(e, "name")}
                    value={data.name}
                    
                  />
                </FormGroup>
                {/* email field */}
                <FormGroup>
                  <Label for="email">Enter email</Label>
                  <Input
                    type="email"
                    placeholder="Enter here"
                    id="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                  />
                </FormGroup>

                {/* password field */}
                <FormGroup>
                  <Label for="email">Enter password</Label>
                  <Input
                    type="password"
                    placeholder="Enter here"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button outline color="light" type="submit" >
                    Signup
                  </Button>
                  <Button color="secondary" className="ms-2" type="Reset">
                    <Link className="text-white" to="/loginform">
                      Login
                    </Link>
                  </Button>
                  {/* onClick={resetData} */}
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
