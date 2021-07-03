import React from "react"

const PlaceTile = (props) => {
  return (
    <li className={props.placeStyle} onClick={props.handleClick}>{props.placeName}</li>
  )
}

export default PlaceTile 