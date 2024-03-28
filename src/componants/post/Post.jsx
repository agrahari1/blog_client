import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, CardText, Container } from "reactstrap";

export default function Post() {
const {id} = useParams();
  useEffect(()=>{
    getPost();
  },[]);
  const [services,setServices] = useState([]);
  const getPost = async ()=>{
 try {
  const result = await axios.get("http://localhost:5000/getBlogPost",{isPublish:true});
  // console.log(result)
 result.data.data.map((item)=>{
    // console.log(item._id)
  });
  setServices(result.data.data);
 } catch (error) {
  console.log(error)
 }
  }
  // const handleReadMore = () => {}
  return (
    <Container >
      <div className="text-center m-5"><h1>Blogs</h1></div>
      {services.map((curElem,Index) =>{
        const {title,description,category } = curElem;
        return( <Card className=" shadow-lg border-none mt-3" key={Index}>
          <CardBody>
            <h1>{title}</h1>
            <CardText  dangerouslySetInnerHTML={{
                        __html: description.substring(0, 30) + ".....",
                      }} >
              
            </CardText>
            <CardText>{category}</CardText>
            <div className="m-2">
              <Link className="btn btn-secondary" to={`/postpage/${curElem._id}`} > Read more</Link>
            </div>
          </CardBody>
        </Card>);
      })}
   
    </Container>
  );
}
