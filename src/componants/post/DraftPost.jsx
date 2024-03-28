import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardText, Container, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

export default function DraftPost() {
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const [services, setServices] = useState([]);
  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getArtical",{
        isPublish
       : false});
      // console.log(result);
      result.data.data.map((item) => {
        // console.log(item._id);
      });
      setServices(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      console.log(id);
      const result = await axios.post("http://localhost:5000/deleteArtical", {
        id,
      });
      setServices(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const publishPost = async (id) =>{
    try {
      const result = await axios.post("http://localhost:5000/publishBlog",{id});
      console.log(result.data.success)
      if(result.data.success){
        alert('Publish Blog successfully !!')
        navigate("/");
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <div className="container">
        {services?.map((curElem, Index) => {
          const { title, description, category } = curElem;
          return (
            <Card className="shadow-lg mt-3" key={Index}>
              <CardBody>
                <h2>{title}</h2>
                <CardText
                  dangerouslySetInnerHTML={{
                    __html: description.substring(0, 30) + ".....",
                  }}
                ></CardText>
                {/* <CardText >dangerouslySetInnerHTML={{__html:description.substring(0,30)+"....."}}</CardText> */}
                <CardText>{category}</CardText>
              </CardBody>
              <div className="m-2">
                <Link
                  className="btn btn-secondary"
                  to={`/postpage/${curElem._id}`}
                >
                  Read more
                </Link>
                {/* <Button>Read more </Button> */}
                {/* <Button className="ms-2" color="warning">Update </Button> */}
                <Link
                  className="btn btn-warning ms-2"
                  to={`/postpageupdate/${curElem._id}`}
                >
                  Update
                </Link>
                <Button
                  className="ms-2"
                  color="danger"
                  onClick={() => deletePost(curElem._id)}
                >
                  Delete{" "}
                </Button>
                <Button className="ms-2" color="primary" 
                onClick={()=>publishPost(curElem._id)}>
                  Publish Blog{" "}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
