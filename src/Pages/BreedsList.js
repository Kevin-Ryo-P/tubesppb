import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './BreedsList.css'

function BreedsList(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
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
  }, [])
  console.log(data)

  return (
    <div className = "list">
      {data === undefined
        ? 'Loading....'
        : data.map((item) => {
            return (
              <div key={item.id}>
                <NavLink to = {`/BreedsList/${item.id}`} onClick ={()=>history.push(`/BreedsList/${item.id}`)}>
                <img className = "breeds-img"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image.url}
                  alt="img not found"
                />
                <p className = "breed-name">{item.name}</p>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}

export default BreedsList;