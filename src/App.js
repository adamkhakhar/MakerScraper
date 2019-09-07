import React from 'react'
import Nav from './Nav'
import s from 'styled-components'
import DataReader from './DataReader'

import './App.css'
import MapboxDispatcher from './MapboxDispatcher'

const Body = s.div`
  padding: 1rem 2rem;
`

function App() {
  const reader = new DataReader()
  const properties = reader.getDistrictProperties()
  const latLongs = reader.getLatLongs()

  const dispatcher = new MapboxDispatcher()
  dispatcher.geocodeAddress('3688 Buena Park Drive, Studio City, CA 91604')

  console.log(latLongs)

  return (
    <>
      <Nav />
      <Body>
        {properties.map(({ name, city, addr }) => (
          <div key={name}>
            <h4 style={{ marginBottom: '0.2rem' }}>{name}</h4>
            <p>
              <strong>City:</strong> {city}
              <br />
              <strong>Address:</strong> {addr}
            </p>
          </div>
        ))}
      </Body>
    </>
  )
}

export default App
