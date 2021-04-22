import React, { useState } from 'react';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';


const TrailerYoutebe = ({ trailerUrl }) => {

    const opts = {
        width: "100%",

        playerVar: {
            autoplay: 1
        }
    }

    if (trailerUrl) {
        return (
            <div className="youtube">
                <YouTube videoId={trailerUrl} opts={opts} />
            </div>
        )
    } else {

        return (
            <div className="youtube">
                <YouTube videoId="VjHMmF7HsoU" opts={opts} />

            </div>
        )
    }
}

export default TrailerYoutebe
