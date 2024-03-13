import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleImage from "./ExampleImage";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Carousal() {
  return (
    <>
    {/* <hr/> */}
      <div className="container  ">
        <div className="row">
        <div class="col-sm-6">
        <Carousel
          className="car-main"
          // style={{ width: "50", margin: 50, marginTop: 30, marginLeft: 100 }}
        >
          <Carousel.Item>
            <ExampleImage
              image={"https://source.unsplash.com/random/?laptop"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleImage image="https://source.unsplash.com/random/?laptop" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    <div class="col-sm-6">
<div className="container">
<Card className="cd-car ">
            {/* <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/?random/100px180"
            /> */}
            <Card.Body>
              <Card.Title>
              <p className="text-muted m-0 p-0">EDITOR'S PICK </p>
              News Needs to Meet Its Audiences Where They Are
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis, doloribus, quos officia iusto excepturi nihil sunt illum dolorum dignissimos fugit rerum animi neque alias earum non reprehenderit accusantium quidem!
              </Card.Text>
              <Card.Text>
                <p className="font-weight-normal m-0 p-0">
                  Dave Rogers in Food
                </p>
                <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
              </Card.Text>
            </Card.Body>
          </Card>
</div>
    </div>
        </div>
      
      </div>
    </>
  );
}
