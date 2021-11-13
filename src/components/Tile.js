import React, { useState } from 'react';
import OtherDetails from "./OtherDetails"

function Tile({ name, image, specialty, weight, greased, medal }) {
  const [isHidden, setIsHidden] = useState(true)

  function toggleOtherDetails() {
    setIsHidden(!isHidden);
  }


  return (
    <div className="ui eight wide column" id="tile" >
      <h3>{name}</h3>
      <img src={image} alt={name} width="600" height="450" onClick={toggleOtherDetails} />
      {!isHidden ? <OtherDetails specialty={specialty} weight={weight} greased={greased} medal={medal}/> : ''}
    </div>
  )
}

export default Tile;