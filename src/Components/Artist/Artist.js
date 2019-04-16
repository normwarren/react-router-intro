import React from 'react'
import {getArtist} from '../../artist-service'

const Artist = (props) => {
  // props.match.params.id is specifically a react router thing
  // it looks for a matching route in the url and then finds a param called id
  // we use this id to get a single artist
  const artist = getArtist(props.match.params.id)
  return (
    <div>
      {/* displaying the specific artist info */}
      <h3>{artist.name}</h3>
      <img style={{height: '250px'}} src={artist.image} alt={artist.name}/>
    </div>
  )
}

export default Artist