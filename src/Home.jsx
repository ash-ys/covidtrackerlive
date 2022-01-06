import React, { useEffect, useState } from 'react';
import { Card, CardGroup, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([])
  const [nepal, setNepal] = useState([])
  useEffect(()=> {
    axios
    .all([
      axios.get("https://disease.sh/v3/covid-19/all"),
      axios.get("https://disease.sh/v3/covid-19/countries"),
      axios.get("https://disease.sh/v3/covid-19/countries/nepal")
    ])
    
    .then (responseArr =>{
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
      setNepal(responseArr[2].data);
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
    <Card.Img variants = "top" src= {data.countryInfo.flag} style={{ maxWidth: '100%',
    height: 'auto'}} />
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
    <CardGroup style={{backgroundColor:'#D9D7F1', display:'grid', gridTemplateColumns:'auto auto auto',}}>
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
  <Card 
  
  bg = "light"
   text= "dark" 
   className='text-center'
    border="success"
     style={{ margin: '10px' }}
     >
    <Card.Img variants = "top" src= "https://disease.sh/assets/img/flags/np.png" style={{ maxWidth: '100%',
    height: 'auto'}} />
    <Card.Body>
      <Card.Title>{nepal.country}</Card.Title>
      <Card.Text>
        Cases {nepal.cases}
      </Card.Text>
      <Card.Text>
        Deaths {nepal.deaths}
      </Card.Text>
      <Card.Text>
        Recovered {nepal.recovered}
      </Card.Text><Card.Text>
        Today's cases {nepal.todaycases}
      </Card.Text><Card.Text>
        Today's deaths {nepal.todaydeaths}
      </Card.Text><Card.Text>
        Active {nepal.active}
      </Card.Text><Card.Text>
      Critical {nepal.critical}
      </Card.Text>
    </Card.Body>
  </Card>
  {countries}
</CardGroup>

    </div>
  );
};

export default App;
