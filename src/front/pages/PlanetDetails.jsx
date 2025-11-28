import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetDetails = () => {
    const { store } = useGlobalReducer();
    const [planetDetails, setPlanetDetails] = useState({});

    const getPlanetDetails = async () => {
        const response = await fetch(store.currentPlanet.url);

        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        console.log(data.result.properties);
        setPlanetDetails(data.result.properties);
    };

    useEffect(() => {
        getPlanetDetails();
    }, []);

    return (
        <div className="container mt-3">
            <h1 className="text-center">Detalles del planeta</h1>

            
        </div>
    );
};
