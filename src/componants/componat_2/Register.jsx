import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
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
    setData({ ...data, [field]: event.target.value });
  };
  const submitForm = async (event) => {
    try {
      event.preventDefault();
      const names = data?.name?.split(" ");
      const payload = {
        // fname: names?.[0] ?? "",
        name: names?.[0] ?? "",
        email: data?.email,
        password: data?.password,
      };

      const res = await axios.post("http://localhost:5000/signup", payload);
      console.log(res)
      if (res.data.success) {
        toast.success(res?.data?.message);
        sessionStorage.setItem("email", payload.email);
        navigate("/verify_otp");
      }
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  //handle error in proper way

  // };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
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
                    placeholder="Enter name"
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
                    placeholder="Enter email"
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
                    placeholder="Enter password"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button outline color="light" type="submit">
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
