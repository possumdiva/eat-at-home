import React from "react";
// import { Link } from 'react-router-dom';

function Reviews(props) {
    return (
        <div className="userReviews">
            <h4>Review by User ID# {props.userID}</h4>
            <p>{props.reviewText}</p>
        </div >
    );
}


export default Reviews;
