import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Categories.css'

function Categories(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/categories', {
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
    <div className = "categories-list">
        <h1> Categories </h1>
      {data === undefined
        ? 'Loading....'
        : data.map((item) => {
            return (
              <div key={item.id}>
                <NavLink to = {`/Categories/${item.id}`} onClick ={()=>history.push(`/Categories/${item.id}`)}>
                <button className = "categories">{item.name}</button>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}

export default Categories;