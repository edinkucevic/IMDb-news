import React, {useEffect, useState} from "react"
import "./movieDetail.css"
import { useParams } from "react-router-dom"

const Serie = () => {
    const [currentMovieDetail, setSerie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setSerie(data))
    }
    
    return (
        <div className="serie">
            <div className="serie__intro">
                <img className="serie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="serie__detail">
                <div className="serie__detailLeft">
                    <div className="serie__posterBox">
                        <img className="serie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="serie__detailRight">
                    <div className="serie__detailRightTop">
                        <div className="serie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="serie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="serie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="serie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="serie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="serie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="serie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="serie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="serie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Serie