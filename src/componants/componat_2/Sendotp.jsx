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
} from "reactstrap";

export default function Sendotp() {

  const navigate = useNavigate();
    //Send OTP
  const [data, setData] = useState({
    otp: "",
  });
  const handleChange = (event, field) => {
    setData({
      //  ...data,
      [field]: event.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: sessionStorage.getItem("email"),
      otp: data.otp,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/verify_otp",
        userData
      );  
      if(response.data.success){
        toast.success(response?.data?.message)
        navigate("/loginform");
      
      }   
     // toast.success(response?.data?.message);
     // return;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return;
    }
  };


  //Resend OTP

  // const[item,setItem] = useState({
  //   email:""
  // })
  // const handleChange = (event, field) => {
  //   setItem({
  //     [field]: event.target.value,
  //   });
  // };
  const handleChangeResendOtp = async (event)=>{
    event.preventDefault();
    const itenData = {
        //email:sessionStorage.getItem("email"),
       email: sessionStorage.getItem("email")
        //otp:item.otp,
    }
    try {
        const result = await axios.post( "http://localhost:5000/resend_otp",itenData );
        toast.success(result?.data?.message);
        return;
    } catch (error) {
        toast.error(error?.result?.data?.message);
        return;
    }
  }

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
              <h3 className="text-center">Verify Here !!</h3>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      id="otp"
                      onChange={(e) => handleChange(e, "otp")}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button type="submit" color="light" outline>
                      Submit
                    </Button>
                    <Button onClick={handleChangeResendOtp} color="secondary" className="ms-2" type="Reset">
                      Resend OTP
                      {/* <Link className="text-white" to="/loginform">
                      Login
                    </Link> */}
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
