import React, { useState, useEffect, useRef, } from 'react'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import axios from "../../config/axios";
import "./index.css";
import { Modal } from '..';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const modalRef = useRef();
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const handleTrailer = (movie) => {
        modalRef.current.open()
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.original_title || movie?.original_name).then((url) => {
                console.log('url', url)
                console.log('namemov  ; ', movie)
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch(() => console.log('Temporaririly unavailabel', trailerUrl))
        }
    }


    const opts = {
        height: "500px",
        width: "100%",
        playerVar: {
            autoplay: 1
        }
    }

    const onClick = (movie) => {
        handleTrailer(movie)
        modalRef.current.open()
    }


    return (
        <div className="row">
            {title}
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handleTrailer(movie)}
                        key={movie.id}
                        className={`row__poster ${isLargeRow &&
                            "rowPosterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}

            </div>

            <Modal
                trailerUrl={trailerUrl}
                ref={modalRef}
                movies={movies}
                handleTrailer={handleTrailer}
            >
                {/* {trailerUrl && <YouTube style={{ zIndex: 10000 }} videoId={trailerUrl} opts={opts} />} */}
            </Modal>


        </div>
    )
}

export default Row
