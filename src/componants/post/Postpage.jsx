import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, Container, CardText, Row, Col } from "reactstrap";

export default function Postpage() {
  const { id } = useParams();
  useEffect(() => {
    getPost();
  }, []);
  const [data, setData] = useState(false);
  const getPost = async (event) => {
    try {
      // event.preventDefault();
      const result = await axios.post("http://localhost:5000/getArticalOne", {
        id,
      });

      const data = result.data.data;
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <CardText className="text-muted">{data.category}</CardText>
          <h1>{data.title}</h1>
          <CardText
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></CardText>
          <CardText className="text-muted">{new Date(data.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</CardText>
        </CardBody>
      </Card>
      {/* <Row className="mt-4">
        <Col md={{ size: 9, offset: 1 }}>
          <h3>Comments</h3>
          {data.comments && data.comments.map((e) => {
              <h3>{e.comments}</h3>;
            })}
        </Col>
      </Row> */}
    </Container>
  );
}
