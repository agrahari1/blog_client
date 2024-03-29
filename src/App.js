import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componants/screen/Home";
import Signup from "./componants/componat_2/Signup";
import Navbarr from "./componants/componat_2/Navbar";
import Login from "./componants/componat_2/Login";
import Subnav from "./componants/componat_2/Subnav";
import Blogheader from "./componants/componat_2/Blogheader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./componants/componat_2/Register";
import Loginform from "./componants/componat_2/Loginform";
import AddPost from "./componants/post/AddPost";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sendotp from "./componants/componat_2/Sendotp";
import Forgetpassword from "./componants/componat_2/Forgetpassword";
import DraftPost from "./componants/post/DraftPost";
import Post from "./componants/post/Post";
import Postpage from "./componants/post/Postpage";
import Postpageupdate from "./componants/post/Postpageupdate";



function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Navbarr />
      <Subnav />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        {/* <Route  path="/signup"  element={<Signup />} /> */}
        <Route  path="/blog"  element={<Blogheader />} />
        <Route  path="/signup"  element={<Register />} />
        <Route  path="/loginform"  element={<Loginform />} />
        <Route  path="/addpost"  element={<AddPost />} />
        <Route  path="/verify_otp"  element={<Sendotp />} />
        <Route  path="/forgotPassword"  element={<Forgetpassword />} />
        <Route  path="/draftPost" element={<DraftPost/>} />
        <Route  path="/post" element={<Post/>} />
        <Route  path="/postpage/:id" element={<Postpage/>} />
        <Route  path="/postpageupdate/:id" element={<Postpageupdate/>} />
        {/* <Route  path={`/postpage/${curElem._id}`} element={<Postpage/>} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
