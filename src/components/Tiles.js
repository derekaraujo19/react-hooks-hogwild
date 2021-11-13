import React, { useState } from 'react';
import Tile from './Tile';

function Tiles({ HOGS }) {
  const [hogs, setHogs] = useState(HOGS);
  // console.log(hogs);
  const [isFiltered, setIsFiltered] = useState("All");

  function handleFilter(e) {
    setIsFiltered(e.target.value);
    // console.log(isGreased)
  }

  const filteredHogs = hogs.filter(hog => {
    if (isFiltered === "All") return true;
    return hog.greased;
  })





  return (
    <div>
    	<form>
				<label>
					Filter by:
					<select name="isGreased" value={isFiltered} onChange={handleFilter}>
            <option>All</option>
            <option>Greased</option>
          </select>
				</label>
			</form>
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
         <Tile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
       ))}
      </div>
    </div>

  )
}

export default Tiles;