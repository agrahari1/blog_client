import React, { useRef, useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import axios from "axios";

import {
  Card,
  CardBody,
  Button,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Postpageupdate() {
  const navigate = useNavigate();
  const editor = useRef(null);
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const result = await axios.post("http://localhost:5000/getArticalOne", {
        id,
      });
      console.log(result.data.data.title);
      setTitle(result.data.data.title);
      setDescription(result.data.data.description);
      setCategory(result.data.data.category);
      console.log(title, description, category);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/updateArtical", {
        id,
        title,
        description,
        category,
      });
      console.log(response);
      console.log(response.data.success);
      if(response.data.success){
        alert(response.data.message);
        navigate('/draftPost')
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="container">
        <Card className="shawdow-lg">
          {/* <CardBody><h1>hello</h1></CardBody> */}
          <CardBody>
            <Form onSubmit={updatePost}>
              <div className="my-3">
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  className="rounded-0"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="my-3">
                <Label for="content"> Content / Description</Label>
                <JoditEditor
                  ref={editor}
                  value={description}
                  id="description"
                  name="description"
                  onChange={(e) => {
                    setDescription(e);
                  }}
                />
              </div>
              <div className="my-3">
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Enter category"
                  className="rounded-0"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={0}
                >
                  <option disabled value={0}>
                    --Select category--
                  </option>
                  <option>Programming</option>
                  <option>Health</option>
                  <option>Sports</option>
                  <option>Politics</option>
                </Input>
              </div>
              <Button type="submit" color="primary">
                Update Post
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
