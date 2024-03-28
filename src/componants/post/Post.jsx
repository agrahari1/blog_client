import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'


export default function Post({post="This is default post title", contant="This is default contant title"}) {

  return (
   <Card>
    <CardBody>
        <h1>hello world</h1>
        <CardText>
            <p>description</p>
        </CardText>
    </CardBody>
   </Card>
  )
}
