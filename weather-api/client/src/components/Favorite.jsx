import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Favorite = () => {
  // create state
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  }

  
  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>

    </div>
  )
}

export default Favorite;