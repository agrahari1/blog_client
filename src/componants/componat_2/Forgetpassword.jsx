import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Form,
  Label,
} from "reactstrap";

export default function Forgetpassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    data: "",
  });
  const handleChange = (event, field) => {
    setData({ [field]: event.target.value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: data.email,
    };
    try {
      const result = await axios.post(
        "http://localhost:5000/forgotPassword",
        userData
      );
      if (result.data.success) {
        toast.success(result.data.message);
        navigate("/verify_otp");
        return;
      }
      // toast.success(result?.data?.message);
      // navigate("/verify_otp");
      // return;
    } catch (error) {
      toast.error(error?.result?.data?.message);
      return;
    }
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col
          sm={{
            size: 6,
            offset: 3,
          }}
        >
          <Card className="shadow-lg" color="dark" inverse>
            <CardHeader>
              {/* <h3 className="text-center">Verify Here !!</h3> */}
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter the email "
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button type="submit" color="light" outline>
                      Submit
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
