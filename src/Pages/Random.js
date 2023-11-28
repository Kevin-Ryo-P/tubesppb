import React, {useState, useEffect} from "react";
import './Random.css'
const apiKey = 'live_cmVUIjBqF3t4J2zpsNU54RTmaPxHgvT6YFNjZ7RwLt1UCfEMfj9QPH5arjspJijW';
const url = 'https://api.thecatapi.com/v1/images/search';

function Random(){
  const [catUrl, setCatUrl] = useState('https://api.thecatapi.com/v1/images/search');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getCat();
  }, []);

  const getCat = () => {

    fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then((res) => res.json())
      .then((cats) => {
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
        setLoading(false)
      })
      .catch((error) => {
      });
  }

  if(loading){
    return <h2>Loading....</h2>
  }

  return(
    <div className = "random-content">
      <img className = "random-img" src= {catUrl} alt=""/>
      <button onClick={getCat}>Get Random Cat Image</button>
    </div>
  );

}

export default Random;