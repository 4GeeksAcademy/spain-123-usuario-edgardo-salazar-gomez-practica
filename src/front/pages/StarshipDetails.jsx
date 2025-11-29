import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Función para transformar las keys de la API a texto amigable
const renderDetails = (details) => {
    const info = {
        model: "Modelo",
        starship_class: "Clase",
        manufacturer: "Fabricante",
        cost_in_credits: "Costo en créditos",
        length: "Longitud",
        crew: "Tripulación",
        passengers: "Pasajeros",
        max_atmosphering_speed: "Velocidad máxima",
        hyperdrive_rating: "Hiperpropulsor",
        MGLT: "MGLT",
        cargo_capacity: "Capacidad de carga",
        consumables: "Consumibles"
    };

    let elementos = [];

    for (const key in info) {
        elementos.push(
            <li key={key}>
                <strong>{info[key]}:</strong> {details[key]}
            </li>
        );
    }

    return elementos;
};

export const StarshipDetails = () => {
    const { store } = useGlobalReducer();
    const [starshipDetails, setStarshipDetails] = useState(null);

    const getStarshipDetails = async () => {
        if (!store.currentStarship.url) {
            console.log("No hay URL de la nave en el store");
            return;
        }

        try {
            const response = await fetch(store.currentStarship.url);

            if (!response.ok) {
                console.log("Error", response.status, response.statusText);
                return;
            }

            const data = await response.json();
            setStarshipDetails(data.result.properties);
        } catch (error) {
            console.log("Error fetching starship details:", error);
        }
    };

    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    };

    useEffect(() => {
        getStarshipDetails();
    }, []);

    if (!starshipDetails) return <p className="text-center mt-4">Cargando...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Detalles de la Nave</h1>

            <div className="row align-items-start">

                <div className="col-12 col-md-4 text-center mb-4">
                    <img
                        alt={store.CurrentStarship.name}
                        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${store.currentStarship.uid}.jpg?raw=true`}
                        onError={handleError}
                        style={{
                            width: "100%",
                            maxWidth: "200px",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </div>

               
                <div className="col-12 col-md-8">
                    <h2>{store.currentStarship.name}</h2>

                    <ul className="character-list">
                        {renderDetails(starshipDetails)}
                    </ul>
                </div>

            </div>
        </div>
    );
};
