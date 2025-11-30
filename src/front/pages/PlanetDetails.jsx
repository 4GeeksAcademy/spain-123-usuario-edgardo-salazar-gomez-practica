import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const renderDetails = (details) => {
  const info = {
    name: "Nombre",
    climate: "Clima",
    diameter: "Diámetro",
    gravity: "Gravedad",
    orbital_period: "Periodo orbital",
    population: "Población",
    rotation_period: "Periodo de rotación",
    surface_water: "Agua superficial",
    terrain: "Terreno",
  };

  let elementos = [];
  for (const key in info) {
    if (details[key] !== undefined) {
      elementos.push(
        <li key={key}>
          <strong>{info[key]}:</strong> {details[key]}
        </li>
      );
    }
  }
  return elementos;
};

export const PlanetDetails = () => {
  const { store } = useGlobalReducer();
  const [planetDetails, setPlanetDetails] = useState(null);

  const getPlanetDetails = async () => {
    try {
      const response = await fetch(store.currentPlanet.url);
      if (!response.ok) {
        console.log("Error", response.status, response.statusText);
        return;
      }

      const data = await response.json();
      setPlanetDetails(data.result.properties);
    } catch (error) {
      console.log("Error fetching planet details:", error);
    }
  };

  const handleError = (event) => {
    event.target.src =
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
  };

  useEffect(() => {
    if (store.currentPlanet.url) getPlanetDetails();
  }, [store.currentPlanet.url]);

  if (!planetDetails)
    return <p className="text-center mt-4">Cargando detalles del planeta...</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Detalles del Planeta</h1>

      <div className="row align-items-start">
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            alt={store.currentPlanet.name}
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${store.currentPlanet.uid}.jpg?raw=true`}
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
          <h2>{store.currentPlanet.name}</h2>

          <ul className="character-list">{renderDetails(planetDetails)}</ul>
        </div>
      </div>
    </div>
  );
};
