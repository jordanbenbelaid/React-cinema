import React from "react"

//displays individual films info

const ListingMovie = (props) => {
    return(
        <div className="col-12 justify-content-center align-items-center">
            
            
            <div>
                <p>Film Title: {props.films.title}</p>
                <p>Film Synopsis: {props.films.synopsis}</p>
            </div>
            
            
            
            
            
            {/* // <p>Film Title: {props.listing.title}</p>
            // <p>Film Synopsis: {props.listing.synopsis}</p> */}
        </div>
    )
}

export default ListingMovie