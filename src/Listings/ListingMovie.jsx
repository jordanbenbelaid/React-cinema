import React from "react"

//displays individual films info

const ListingMovie = (props) => {
    return(
        <div className="col-12 justify-content-center align-items-center">
            <h3>{props.film.title}</h3>
            <p>{props.film.synopsis}</p>
        </div>
    )
}

export default ListingMovie