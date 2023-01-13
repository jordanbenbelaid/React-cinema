import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { data } from "../Data/films.json"
import ListingMovie from "./ListingMovie"

const Listings = () => {
    return(
        <>
        <Header/>

            <h4>Here are the current listings available! Feel free to make a booking too!</h4>

            <div className="row">
                {console.log({data})}
                {data.map(film => {
                    return(
                    <div className="col-4" key={film.id}>
                        <ListingMovie film={film} />
                    </div>
                    )
                })}

            </div>

        <Footer/>
        </>
    )
}

export default Listings