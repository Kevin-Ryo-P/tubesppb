import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './BreedsDetail.css'

export default function BreedsDetail() {
    const [data, setData] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${itemId}`, {
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

    return (
        <div>
            {data === undefined ? 'Loading...': (
            <div className = 'detail'>
                <img className = 'breeds-img' src={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}alt="img not found"/>
                <p> {data.name} </p>
                <p> {data.temperament} </p>
                <p> {data.description} </p>
            </div>
            ) }
            
            
        </div>
    )
}