import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { MapContain } from './MapStyles'
import FamMarker from './FamilyMarker'
import NeighborMarker from './NeighborMarker'
import { EggLocations } from './EggLocations'
import EggMarker from './EggMarker'

function Map(props, { latitude, longitude, refresh }) {
  console.log(process.env)
  const [zoom, setZoom] = useState()
  const [eggStep, setEggStep] = useState(0)
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -104.7,
    zoom: 11,
    width: '60vw',
    height: '100%',
  })
  const [locations, setLocations] = useState(props.locations)

  useEffect(() => {
    console.log('hi')
    setLocations(props.locations)
  }, [props])
  return (
    <MapContain>
      <ReactMapGL
        width='100%'
        height='100%'
        {...viewport}
        mapboxApiAccessToken={process.env.Map_Box}
        onViewportChange={viewport => {
          setZoom(viewport.zoom)
          setViewport(viewport)
        }}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            {location.type === 'neighbor' ? (
              <NeighborMarker
                setSelected={props.setSelected}
                selected={props.selected}
                location={location}
                zoom={zoom}
              />
            ) : (
              <FamMarker
                setSelected={props.setSelected}
                selected={props.selected}
                location={location}
                zoom={zoom}
              />
            )}
          </Marker>
        ))}
        <Marker
          key={EggLocations[eggStep].id}
          longitude={EggLocations[eggStep].longitude}
          latitude={EggLocations[eggStep].latitude}
        >
          <EggMarker setEgg={setEggStep} eggStep={eggStep} location={EggLocations[eggStep]} setSelected={props.setSelected} />
        </Marker>
      </ReactMapGL>
    </MapContain>
  )
}

export default Map
