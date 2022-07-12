import React, { useEffect } from 'react'
import Content from './Content';
import { useHistory } from "react-router-dom";

function Search() {
    const history = useHistory();
    const [data,setdata] = React.useState();
    const [state, setState] = React.useState();
    const search = async () => {
        try {
              await fetch(`https://www.omdbapi.com/?t=${state}&apikey=698ae0e`)
            .then((resp) => resp.json())
            .then((da) => {
                history.push({
                    pathname: '/Content',
                    state: da
                })
            })
        } catch (err) {
            console.log(err)
        }

    }
console.log(data)
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Type a movie name..."
                            id="movie-name"
                            onChange={(e) => { setState(e.target.value) }}
                        />
                        <button id="search-btn" onClick={search}>Search</button>
                    </div>
                    <div id="result"></div>
                </div>
            </div>
        </>

    )
}

export default Search;