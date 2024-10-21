import React from 'react';

const Favorite = ({ userId, favoriteCity }) => {

  return (
    // returns current favorite city, also updates when new city is favorited
    <div>
      {favoriteCity ? (
         <p>Your favorite city is: {favoriteCity}</p>
      ) : (
        <p>No favorite city found.</p>
      )}
    </div>
  )
}

export default Favorite;