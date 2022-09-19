import React, {useEffect, useState} from "react"
import "./seriesList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const SerieList = () => {
    
    const [serieList, setSerieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=b5788e52f1100c1aff7296fc2ad5f68c&language=en-US`)
        .then(res => res.json())
        .then(data => setSerieList(data.results))
    }

    return (
        <div className="serie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    serieList.map(serie => (
                        <Cards serie={serie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SerieList