import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MapContain } from "../MapStyles";
import FamMarker from "../Markers/FamilyMarker/FamilyMarker";
import NeighborMarker from "../Markers/NeighborMarker/NeighborMarker";
import { getMembers } from "../../../../redux/thunks/memThunks";
import { useSelector, useDispatch } from "react-redux";

function Map(props, { latitude, longitude, refresh }) {
  const [zoom, setZoom] = useState();
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -104.7,
    zoom: 11,
    width: "100%",
    height: "100%"
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const location = useSelector(state => state.mem);

  const [locations, setLocations] = useState(location.membersArray);

  useEffect(() => {
    setLocations(props.locations);
  }, [props]);
  return (
    <MapContain>
      <ReactMapGL
        width="100%"
        height="100%"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setZoom(viewport.zoom);
          setViewport(viewport);
        }}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            latitude={parseInt(location.latitude)}
            longitude={parseInt(location.longitude)}
          >
            {location.type === "neighbors" ? (
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
      </ReactMapGL>
    </MapContain>
  );
}

export default Map;
