import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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

    const handleError = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    };

    useEffect(() => {
        getCharacterDetails();
    }, []);

    if (!personajeDetails) return <p className="text-center mt-4">Cargando...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Detalles del Personaje</h1>

            {/* LAYOUT: FOTO IZQUIERDA / DETALLES DERECHA */}
            <div className="row align-items-start">
                
                {/* FOTO */}
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

                {/* DETALLES */}
                <div className="col-12 col-md-8">
                    <h2>{store.currentCharacter.name}</h2>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><strong>Altura:</strong> {personajeDetails.height}</li>
                        <li><strong>Peso:</strong> {personajeDetails.mass}</li>
                        <li><strong>Color de pelo:</strong> {personajeDetails.hair_color}</li>
                        <li><strong>Color de piel:</strong> {personajeDetails.skin_color}</li>
                        <li><strong>Color de ojos:</strong> {personajeDetails.eye_color}</li>
                        <li><strong>Año de nacimiento:</strong> {personajeDetails.birth_year}</li>
                        <li><strong>Género:</strong> {personajeDetails.gender}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
