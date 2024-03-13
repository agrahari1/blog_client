import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required").label("Email"),
      password: Yup.string()
        .max(8, "Must be 6 characters or less")
        .required("Password is required").label("Password")
    }),
    onSubmit: (values) => {
     //alert(JSON.stringify(values, null, 2));
    },
  });

  const[user ,setUser] = useState({
    email:'',
    password:''


})

const handleChane = (e)=>{

    const{name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}
  return (
    <>
    <div className="center">
      <div className="main-login">
        <form onSubmit={formik.handleSubmit}>
          <div >
            <label htmlFor="email" className="logadd" >
              Email Address
            </label>{formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <br />
            <input id="email" name="email" value={user.email} onChange={handleChane} type="email" {...formik.getFieldProps("email")} />
            <br />
            
          </div>
          <div >
            <label htmlFor="password" className="pswd">
              Password
            </label>
            <br />
            <input
              id="password"
              type="text" name="password" value={user.password} onChange={handleChane}
              {...formik.getFieldProps("password")}
            />
            <br />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="btnsub" type="submit">
            Submit
          </button>
        </form>
        <div className="flex-container">
          <div className="crt-act">
            <Link to="/signup">Signup</Link>
          </div>
          <div className="fgt">
            <Link to="/forget">Forget </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

 export default Login;