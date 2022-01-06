import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([])
  useEffect(()=> {
    axios
    .all([
      axios.get("https://disease.sh/v3/covid-19/all"),
      axios.get("https://disease.sh/v3/covid-19/countries")
    ])
    
    .then (responseArr =>{
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
  },[]);

  const date= new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  const countries = results.map((data, i)=>{
  return (
  <Card 
  key = {i}
  bg = "light"
   text= "dark" 
   className='text-center'
    border="success"
     style={{ margin: '10px' }}
     >
    <Card.Img variants = "top" src= {data.countryInfo.flag} />
    <Card.Body>
      <Card.Title>{data.country}</Card.Title>
      <Card.Text>
        Cases {data.cases}
      </Card.Text>
      <Card.Text>
        Deaths {data.deaths}
      </Card.Text>
      <Card.Text>
        Recovered {data.recovered}
      </Card.Text><Card.Text>
        Today's cases {data.todaycases}
      </Card.Text><Card.Text>
        Today's deaths {data.todaydeaths}
      </Card.Text><Card.Text>
        Active {data.active}
      </Card.Text><Card.Text>
      Critical {data.critical}
      </Card.Text>
    </Card.Body>
  </Card>
  );
});

  return (
    <div>
    <CardGroup>
  <Card bg = "primary" text= "white" className='text-center' border="success" style={{ margin: '10px' }}>
    
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg = "danger" text= "white"  className='text-center' border="primary" style={{ margin: '10px' }}>
  
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
      {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg = "success" text= "white"  className='text-center' border="danger" style={{ margin: '10px' }}>

    <Card.Body>
      <Card.Title>Recover</Card.Title>
      <Card.Text>
      {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardGroup>
{countries}
    </div>
  );
};

export default App;
