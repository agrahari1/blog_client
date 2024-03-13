import React from "react";
import { Link } from "react-router-dom";




export default function Subnav() {
  return (
    <>
      <div className="container  border-botom sticky-top ">
        <div className="main-sub">
        <ul>
          <li>
            <Link className="home" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="news" to="/addpost">Blog</Link>
          </li>
          <li>
            <Link className="contact" to="/contact">Contact</Link>
          </li>
          <li >
            <Link className="about" to="/about">About</Link>
          </li>
        </ul>

        </div>
      </div>
    </>
  );
}

// import Container from 'react-bootstrap/Container';
// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function Subnav() {
//   return (
//     <>
//      <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link to="#home">Home</Nav.Link>
//             <Nav.Link to="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item to="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item to="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   )
// }
