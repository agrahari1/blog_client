import React, { useRef, useState } from "react";
import { Container, Card, CardBody, Form, Input, Label, Button } from "reactstrap";
import JoditEditor from 'jodit-react';


export default function AddPost() {

    const editor = useRef(null);
     const [content, setContent] = useState('');
    const[categories, setCategories] = useState([])

    const [post,setPost] = useState({
      post_title:'',
      post_description:'',
      post_category:''
    })


    const fieldChanged =(event)=>{
     setPost({...post,
     // 'post_title':event.target.value
     [event.target.name]:event.target.value
    })
    }

    const contentFieldChanged = (data)=>{
      setPost({...post,'post_description':data})
    }

    //create post function
    const createPost = (event)=>{
      event.preventDefault();
      console.log(post)
      if(post.post_title.trim()===''){
        alert("post is required !!")
        return;
      }

      if(post.post_description.trim()===''){
        alert("post description is required !!")
        return;
      }
      if(post.post_category===''){
        alert("post category is required !!")
        return;
      }

      //submit the form on server
    }

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
                <Label for="title">Post Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="post_title"
                  placeholder="Enter Title"
                  className="rounded-0"
                  onChange={fieldChanged}
                />
              </div>

              <div className="my-3">
                <Label for="content">Post Content / Description</Label>
                <JoditEditor
                 ref={editor}
                 value={content}
                 name="post_description"
                
                 onChange={contentFieldChanged}
                />
               
              </div>

              <div className="my-3">
                <Label for="categary">Post categary</Label>
                <Input
                  type="select"
                  id="categary"
                  placeholder="Enter categary"
                  className="rounded-0"
                  name="post_category"
                  onChange={fieldChanged}
                  defaultValue={0}
                >
                  <option disabled Value={0}>--Select category--</option>
                  <option>Programming</option>
                  <option>Health</option>
                  <option>Sports</option>
                  <option>Politics</option>
                </Input>
              </div>
              <Container className="text-center">
                <Button type="submit" color="primary">Create Post</Button>
                <Button className="ms-2" color="danger" >Reset content</Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
