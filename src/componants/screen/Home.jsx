import React from "react";
import Carousal from "../componat_2/Carousal";
import Cardd from "../componat_2/Card";
import AddPost from "../post/AddPost";
import NewFeed from "../componat_2/NewFeed";
import Post from "../post/Post";



export default function Home() {
  return (
    <>
   
      <Carousal />
      <Post/>
      {/* <NewFeed/> */}
      <Cardd />
      
      
      {/* <Blogheader /> */}
    </>
  );
}
