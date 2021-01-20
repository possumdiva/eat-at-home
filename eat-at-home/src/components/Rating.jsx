import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Rating = (props) => {

  const [rating, setRating] = useState(props.rating);
  

  return (
    <div>
      <h1>Rating:{rating}</h1>
      <div style={styles.starStyle}>
        {rating >= 1 ? (
          <IoIosStar size={32} onClick={() => setRating(1)} />
        ) : (
          <IoIosStarOutline size={32} onClick={() => setRating(1)} />
        )}
        {rating >= 2 ? (
          <IoIosStar size={32} onClick={() => setRating(2)} />
        ) : (
          <IoIosStarOutline size={32} onClick={() => setRating(2)} />
        )}
        {rating >= 3 ? (
          <IoIosStar size={32} onClick={() => setRating(3)} />
        ) : (
          <IoIosStarOutline size={32} onClick={() => setRating(3)} />
        )}
        {rating >= 4 ? (
          <IoIosStar size={32} onClick={() => setRating(4)} />
        ) : (
          <IoIosStarOutline size={32} onClick={() => setRating(4)} />
        )}
        {rating >= 5 ? (
          <IoIosStar size={32} onClick={() => setRating(5)} />
        ) : (
          <IoIosStarOutline size={32} onClick={() => setRating(5)} />
        )}
      </div>
    </div>
  );
};
export default Rating;

const styles = {
  starStyle: {
    color: "orange",
  },
};
