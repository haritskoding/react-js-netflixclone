import React, { useState, useEffect, useRef, } from 'react';
import "./index.css";
import request from "../../config/request";
import axios from "../../config/axios"
import { Modal } from '..';
import movieTrailer from 'movie-trailer';

const Banner = () => {
    const modalRef = useRef();
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const json = await axios.get(request.fetchNetFlixOriginals)
            console.log('9999', json.data.results)
            setMovies(json.data.results[Math.floor(Math.random() * json.data.results.length)
            ])
            return json.data;
        }
        fetchData();
    }, [])


    const handleTrailer = (movie) => {
        modalRef.current.open()
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || movie?.original_name).then((url) => {
                console.log('url', movie)
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((e) => console.log('unavailabel', e))
        }
    }


    const truncateDesc = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (

        <div

            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`
            }}
        >
            <div
                onClick={() => handleTrailer(movies)}
                className="banner__contents">
                <h1 className="banner__title">
                    {movies?.title || movies?.title || movies?.original_name || movies?.name}
                </h1>

                <div className="banner__butons">
                    <button
                        onClick={() => handleTrailer(movies)}
                        className="banner_button">
                        Play
                </button>


                    <button className="banner_button">
                        My list
                </button>
                </div>

                <h1 className="banner__description">
                    {truncateDesc(movies?.overview, 130)}
                </h1>
            </div>
            <div className="banner__fadeBottom">

            </div>
            <Modal
                ref={modalRef}
                movies={movies}
                trailerUrl={trailerUrl}
                handleTrailer={handleTrailer}
            />
        </div>
    )
}

export default Banner
