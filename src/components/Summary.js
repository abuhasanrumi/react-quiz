import React from 'react';
import successImg from "../assets/images/success.png";
import useFetch from '../hooks/useFetch';
import classes from "../styles/Summary.module.css";

function Summary({ score, noq }) {

    const REACT_APP_PEXELS_API_KEY = 'AGhKSvMw8V6PMO0QGT4gEUQHVXXnpJKbKmrEw50GXR5dO0wp2ln0ievB';
    const getKeyword = () => {
        if ((score / (noq * 5)) * 100 < 50) {
            return "failed"
        } else if ((score / (noq * 5)) * 100 < 75) {
            return "good"
        } else if ((score / (noq * 5)) * 100 < 100) {
            return "very good"
        } else {
            return "excellent"
        }
    }
    const { loading, error, result } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
        "GET",
        {
            Authorization: REACT_APP_PEXELS_API_KEY,
        })
    const image = result ? result?.photos[0].src.medium : successImg;

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                {/* progress bar will be placed here */}
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            {loading && <div className={classes.badge}>Loading your badge...</div>}
            {error && <div className={classes.badge}>An error occured...</div>}
            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    )
}

export default Summary