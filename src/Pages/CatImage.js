import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './CatImage.css'

export default function CatImage() {
    const [data, setData] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${itemId}`, {
          headers: {
            'x-api-key': 'live_cmVUIjBqF3t4J2zpsNU54RTmaPxHgvT6YFNjZ7RwLt1UCfEMfj9QPH5arjspJijW',
          },
        })
          .then((res) => res.json())
          .then((cats) => {
            setData(cats)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [itemId])

      console.log(data)

    const refresh = () => {
        fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${itemId}`, {
          headers: {
            'x-api-key': '231cf931-5f2b-4fe3-a699-bf4e2d6b488d',
          },
        })
          .then((res) => res.json())
          .then((cats) => {
            setData(cats)
          })
          .catch((error) => {
            console.log(error)
          })
      }

    return (
        <div className = "content" >
            {data === undefined ? 'Loading...'
            :data.map((item)=>{ 
            return (
                <div className = 'detail'>
                    <img className = 'breedsimg' src={item.url}alt="img not found"/>
                    <button onClick = {refresh} >Another Picture</button>
                </div>
            )
            })}
            
        </div>
    )
}