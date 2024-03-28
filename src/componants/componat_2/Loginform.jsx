import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function Loginform() {
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    // let actualValue = event.target.value
    setLoginDetail({
      ...loginDetail,
      [field]: event.target.value,
    });
  };

  // const handleReset=()=>{
  //   setLoginDetail({
  //     email:"",
  //     password:"",
  //   })
  // }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //console.log(loginDetail);

    if (loginDetail.email.trim() == "") {
      toast.error("User email id is required !!");
      return;
    }

    if (loginDetail.password.trim() == "") {
      toast.error("Password is required !!");
      return;
    }


    const userData = {
      email: loginDetail.email,
      password: loginDetail.password
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );

     // console.log("Login successful!", response.data);
     if(response.data.success){
      toast.success(response.data.message);
    const tok = response.data?.token
    sessionStorage.setItem("token", tok);
      navigate("/home");
      return;

     }
    } catch (error) {
      console.error("Login failed!", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Container>
      <Row className="mt-5 ">
        <Col
          sm={{
            size: 6,
            offset: 3,
          }}
        >
          <Card className="shadow-lg" color="dark " inverse>
            <CardHeader className="text-center mt-5">
              <h3>Please Login to Create Blog !!</h3>
            </CardHeader>

            <CardBody>
              <Form onSubmit={handleFormSubmit}>
                {/* name field */}
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={loginDetail.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                </FormGroup>
                {/* password field */}
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </FormGroup>

                <Container className="text-center">
                  <Button type="submit" color="light" outline>
                    Login
                  </Button>
                  <Button className="ms-2" color="secondary">
                    <Link className="text-white" to="/signup">
                      Signup
                    </Link>
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
