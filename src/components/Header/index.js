import React, { useState, useEffect } from 'react';
import "./index.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const Header = () => {
    const [show, setShow] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        });

        const _fnEmptyFunctionPointer = () => { }



        return () => {
            window.removeEventListener("scroll", _fnEmptyFunctionPointer)
        }
    });


    return (
        <div className={`header ${show && "header__black"}`}>
            <img
                className="header__logo"
                src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
                alt=""
            />
            <img
                className="header__userIcon"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
            />

        </div>
    )
}

export default Header
