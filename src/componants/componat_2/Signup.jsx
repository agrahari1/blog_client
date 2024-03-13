import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

export default function Signup() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className="container">
          <div className="form-main">
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  //md="4"
                  md="6"
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder=" First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik102"
                  className="position-relative"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />

                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group> */}
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />

                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik104"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !errors.password}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  
                  
                 
                </Form.Group>
              </Row>

              <Button type="submit">SignUp</Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios"

// export default  function Signup() {

//     const[user ,setUser] = useState({

//     })

//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       const response = await axios.post('http://localhost:5000/signup/Form', user).then(res =>console.log(res))

//     // const signup = () =>{
//     //     const { name , email ,password} =user
//     //     if(name && email && password){
//     //         axios.post("http://localhost:5000/signup" , user)
//     //         .then(res =>console.log(res))
//     //     } else {
//     //         alert("invalid input");
//     //     }

//     // }

//   return (
//     <>

//       <Form className="container bg-dark rounded-3 m-5 w-50  " onSubmit={handleSubmit}>
//         {/* {console.log("User",user)} */}
//         <div className="row">
//         <Form.Group className="mb-3  w-25 " controlId="name">
//           <Form.Label className="text-light">First name</Form.Label>
//           <Form.Control type="name" name="name" value={user.name}  placeholder="Enter name" required />
//         </Form.Group>
//         <Form.Group className="mb-3  w-25 " controlId="lastname">
//           <Form.Label className="text-light">Last name</Form.Label>
//           <Form.Control type="name" name="last" value={user.last}  placeholder="Last name" required />
//         </Form.Group>
//         </div>
//         <div className="row">
//         <Form.Group className="mb-3  w-25 " controlId="email">
//           <Form.Label className="text-light">Email</Form.Label>
//           <Form.Control type="email" name="email" value={user.email}  placeholder="Enter email" required />
//         </Form.Group>

//         <Form.Group className="mb-3  w-25" controlId="password">
//           <Form.Label  className="text-light">Password</Form.Label>
//           <Form.Control type="password" name="password" value={user.password}  placeholder="Password" required />
//         </Form.Group>
//         </div>
//         {/* </Form></Form.Group> */}
//         <Button variant="primary" type="submit" onClick={Signup }>
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// }
// }
