import React, {useState, useEffect} from "react";
// import axios from "axios";
import "./About.css"

function About(){
   // const [data, setData] = useState('')

   // useEffect(() => {
   //    async function fetchData() {
   //      const request = await axios
   //        .get(`https://api.github.com/users/ilhamdaffa21`)
   //        .then((res) => setData(res.data))
   //        .catch((e) => Alert.alert('Gagal!', e))
   //      return
   //      request
   //    }
   //    fetchData()
   //  }, [])
  
   return(
   <div className = "card" >
       <p> About catto: </p>
       <p> Catto is an app for cat lovers</p>
       <p> Made using React.js </p>
       <p> Using API from thecatapi.com </p>
       <p> Made by: Kevin Ryo</p>

    </div>
   );
}

export default About;