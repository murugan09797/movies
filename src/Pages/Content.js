import React from 'react'

function Content(props) {


    let { state: data } = props.location;


    return (
        <>
            <div className="info">
                <img src={data.Poster} className='poster' />
                <div>
                    <h2>${data.Title}</h2>
                    <div className="rating">
                        <img src="https://dl.dropbox.com/s/c0olu3aadxcm3p7/star-icon.svg?raw=1" />
                        <h4>${"data.imdbRating"}</h4>
                    </div>
                    <div className="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div className="genre">
                        <div></div>
                    </div>
                </div>

                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
            </div>
        </>
    )
}

export default Content;