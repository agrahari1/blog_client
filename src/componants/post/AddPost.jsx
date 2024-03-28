import React, { useRef, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
} from "reactstrap";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import axios from "axios";
import DraftPost from "./DraftPost";

export default function AddPost() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
  });

  const fieldChanged = (event, title) => {
    setPost({ ...post, [title]: event?.target?.value ?? event });
  };

  //create post function
  const createPost = async (event) => {
    try {
      event.preventDefault();
      console.log(post);
      if (post.title.trim() === "") {
        toast.error("Title is required !!");
        return;
      }
      if (post.description.trim() === "") {
        toast.error("Description is required !!");
        return;
      }
      const userData = {
        title: post.title,
        description: post.description,
        category: post.category,
      };
      //  const token=sessionStorage.getItem('token')
      //  console.log(token)
      // const config={
      //   headers:{Authorization:`Bearer${token}`}
      // };
      // const bodyParameters={
      //   key:'value'
      // }
      // const result = await axios.post("http://localhost:5000/createArtical",{userData,config,bodyParameters});
      const email = sessionStorage.getItem("email");
      console.log(email);
      const result = await axios.post(
        "http://localhost:5000/createArtical",
        userData
      );
      console.log(result);
      if (result.data.success) {
        toast.success(result.data.message);
        return;
      }
    } catch (error) {
      console.error("Something wrong !!", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Container>
      <div className="container">
        <Card className="shadow-lg ">
          <CardBody>
            {/* {JSON.stringify(post)} */}
            <h3>Whats going in your mind ?</h3>
            <Form onSubmit={createPost}>
              <div className="my-3">
                {/* title */}
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  className="rounded-0"
                  onChange={(e) => fieldChanged(e, "title")}
                />
              </div>

              <div className="my-3">
                <Label for="content"> Content / Description</Label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  id="description"
                  name="description"
                  onChange={(e) => fieldChanged(e, "description")}
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
                  onChange={(e) => fieldChanged(e, "category")}
                  //onChange={(e) =>fieldChanged(e,"category")}
                  // onChange={(e)=>fieldChanged(e,"field")}
                  defaultValue={0}
                >
                  <option disabled Value={0}>
                    --Select category--
                  </option>
                  <option>Programming</option>
                  <option>Health</option>
                  <option>Sports</option>
                  <option>Politics</option>
                </Input>
              </div>
              <Container className="text-center">
                <Button type="submit" color="primary">
                  Create Post
                </Button>
                <Button className="ms-2" color="danger">
                  Reset content
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
        
      </div>
    </Container>
  );
}
