import React, { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  return (
    <div>
    <CardGroup>
  <Card bg = "primary" text= "white" className='text-center' border="success" style={{ margin: '10px' }}>
    
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        109
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg = "danger" text= "white"  className='text-center' border="primary" style={{ margin: '10px' }}>
  
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        0
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg = "success" text= "white"  className='text-center' border="danger" style={{ margin: '10px' }}>

    <Card.Body>
      <Card.Title>Recover</Card.Title>
      <Card.Text>
        99
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  );
};

export default App;
