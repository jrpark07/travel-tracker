import React, { useState } from 'react';
import PlaceTile from "./PlaceTile"

const App = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  const placesList = props.data.places.map((place) => {
    const handleClick = () => {
      setSelectedPlaceId(place.id)
    }

    let placeStyle = ""
    if (selectedPlaceId === place.id) {
      placeStyle = "done"
    }

    return (
      <PlaceTile 
        key={place.id}
        placeName={place.name}
        handleClick={handleClick}
        placeStyle={placeStyle}
      />
    )
  })

  let message = ""
  if (selectedPlaceId === props.data.favoritePlaceId) {
    message = (
      <div>
        What a beauty!
      </div>
    )
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          {placesList}

          {message}
        </div>
      </div>
    </div>
  )
}

export default App;