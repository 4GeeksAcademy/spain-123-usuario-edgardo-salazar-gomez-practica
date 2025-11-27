import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Characters = () => {
    const swapiHost = "https://www.swapi.tech/api"
    const [characters, setCharacters] = useState([])

    //Petición a la API
    const getCharacters = async () => {
        const uri = `${swapiHost}/people`
        const response = await fetch(uri)
        if (!response.ok) {
            //Tratamos el error
            console.log('Error:', response.status, response.statusText)
            return
        }
        const data = await response.json()
        setCharacters(data.results)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div className="container m-3">
            <h1 className="text-center">Characters</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
                {characters.map((item) =>
                    <div className="Col" Key={item.uid}>
                        <div className="card border-dark rounded my-3 mx-2 text-bg-dark">
                            <img alt="" src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${item.uid}.jpg?raw=true`} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-secondary" to="#">Details</Link>
                                    <Link className="btn btn-outline-warning" to="/characters">
                                                <i className="far fa-heart fa-lg"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}