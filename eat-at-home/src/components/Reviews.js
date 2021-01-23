import React from "react";
// import { Link } from 'react-router-dom';

function Reviews(props) {
    return (
        <div className="userReviews">
            <h5>Review by User # {props.userID}</h5>
            <p>{props.reviewText}</p>
        </div >
    );
}


export default Reviews;
