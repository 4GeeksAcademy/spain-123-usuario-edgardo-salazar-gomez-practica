import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const renderDetails = (details) => {
    const info = {
        height: "Altura",
        mass: "Peso",
        hair_color: "Color de pelo",
        skin_color: "Color de piel",
        eye_color: "Color de ojos",
        birth_year: "Año de nacimiento",
        gender: "Género"
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

export const CharacterDetails = () => {
    const { store } = useGlobalReducer();
    const [personajeDetails, setPersonajeDetails] = useState(null);

    const getCharacterDetails = async () => {
        try {
            const response = await fetch(store.currentCharacter.url);

            if (!response.ok) {
                console.log("Error", response.status, response.statusText);
                return;
            }

            const data = await response.json();
            setPersonajeDetails(data.result.properties);
        } catch (error) {
            console.log("Error fetching character details:", error);
        }
    };

    const handleError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    };

    useEffect(() => {
        getCharacterDetails();
    }, []);

    if (!personajeDetails) return <p className="text-center mt-4">Cargando...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Detalles del Personaje</h1>

            <div className="row align-items-start">

                <div className="col-12 col-md-4 text-center mb-4">
                    <img
                        alt={store.currentCharacter.name}
                        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${store.currentCharacter.uid}.jpg?raw=true`}
                        onError={handleError}
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <h2>{store.currentCharacter.name}</h2>

                    <ul className="character-list">
                        {renderDetails(personajeDetails)}
                    </ul>
                </div>
            </div>
        </div>
    );
};
