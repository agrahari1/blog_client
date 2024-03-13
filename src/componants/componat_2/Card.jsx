import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cardd() {
  return (
    <div className="container">
      <div class="clearfix">
        <div className="clearfix">
          <span className="float-start ">Editor's Pick</span>
          <span className="float-end">Trending</span>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-4 vh-50">
          <Card className="cd">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/?random/100px180"
            />
            <Card.Body>
              <Card.Title>
                News Needs to Meet Its Audiences Where They Are
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </Card.Text>
              <Card.Text>
                <p className="font-weight-normal m-0 p-0">
                  Dave Rogers in News
                </p>
                <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-4" style={{ height: "100px" }}>
          <Card className="cd">
            <div className="row">
              <div className="col-sm">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/random/?random/60px210"
                />
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>
                  {/* <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </Card.Text> */}
                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/random/?random/60px210"
                />
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>
                  {/* <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </Card.Text> */}
                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/random/?random/60px210"
                />
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>
                  {/* <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </Card.Text> */}
                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-sm-4" style={{ height: "100px" }}>
          <Card className="cd" >
            <div className="row">
              <div className="row w-25">
                <p className="text-muted fs-1">01 </p>
                {/* <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/?random/60px210"
            /> */}
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>

                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row">
              <div className="row w-25">
                <p className="text-muted fs-1">02 </p>
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>

                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row">
              <div className="row w-25 ">
                <p className="text-muted fs-1">03 </p>
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>

                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row">
              <div className="row w-25 ">
                <p className="text-muted fs-1">04 </p>
              </div>
              <div className="col-sm">
                <Card.Body>
                  <Card.Title>
                    News Needs to Meet Its Audiences Where They Are
                  </Card.Title>

                  <Card.Text>
                    <p className="font-weight-normal m-0 p-0">
                      Dave Rogers in News
                    </p>
                    <p className="text-muted m-0 p-0">Jun 14 • 3 min read </p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// <div className="container">
//   <div className="main-card" >
//     <CardGroup>
//       <Card className="m-2">
//         <Card.Img
//           variant="top"
//           src="https://source.unsplash.com/random/?random/150px180"
//         />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit
//             longer.
//           </Card.Text>
//           {/* <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer> */}
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>

//       <Card className="m-2">
//         <Card.Img
//           variant="top"
//           src="https://source.unsplash.com/random/?random/150px180"
//         />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This card has supporting text below as a natural lead-in to
//             additional content.{" "}
//           </Card.Text>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card.Body>
//       </Card>
//     </CardGroup>
//   </div>
// </div>
