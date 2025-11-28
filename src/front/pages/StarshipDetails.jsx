import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const StarshipDetails = () => {
    const { store } = useGlobalReducer();
    const [starshipDetails, setStarshipDetails] = useState(null);

    const getStarshipDetails = async () => {
        try {
            const response = await fetch(store.currentStarship.url);
            if (!response.ok) return console.log("Error", response.status);
            const data = await response.json();
            setStarshipDetails(data.result.properties);
        } catch (error) {
            console.log("Error fetching starship details:", error);
        }
    };

    const handleError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    };

    useEffect(() => { getStarshipDetails(); }, []);

    if (!starshipDetails) return <p className="text-center mt-4">Cargando...</p>;

    return (
        <div className="container mt-4 bg-dark text-light p-4 rounded">
            <h1 className="text-center mb-4">{store.currentStarship.name}</h1>

            <div className="row">
                {/* FOTO */}
                <div className="col-md-4 text-center mb-3">
                    <div className="card bg-secondary text-light shadow">
                        <img
                            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${store.currentStarship.uid}.jpg?raw=true`}
                            onError={handleError}
                            className="card-img-top"
                            alt={store.currentStarship.name}
                        />
                    </div>
                </div>

                {/* DETALLES */}
                <div className="col-md-8">
                    <ul className="list-unstyled">
                        <li><strong>Name:</strong> {starshipDetails.name}</li>
                        <li><strong>Model:</strong> {starshipDetails.model}</li>
                        <li><strong>Manufacturer:</strong> {starshipDetails.manufacturer}</li>
                        <li><strong>Cost in credits:</strong> {starshipDetails.cost_in_credits}</li>
                        <li><strong>Length:</strong> {starshipDetails.length}</li>
                        <li><strong>Max atmosphering speed:</strong> {starshipDetails.max_atmosphering_speed}</li>
                        <li><strong>Crew:</strong> {starshipDetails.crew}</li>
                        <li><strong>Passengers:</strong> {starshipDetails.passengers}</li>
                        <li><strong>Cargo capacity:</strong> {starshipDetails.cargo_capacity}</li>
                        <li><strong>Consumables:</strong> {starshipDetails.consumables}</li>
                        <li><strong>Hyperdrive rating:</strong> {starshipDetails.hyperdrive_rating}</li>
                        <li><strong>MGLT:</strong> {starshipDetails.MGLT}</li>
                        <li><strong>Starship class:</strong> {starshipDetails.starship_class}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
