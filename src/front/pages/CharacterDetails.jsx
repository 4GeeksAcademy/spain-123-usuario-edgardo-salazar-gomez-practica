import useGlobalReducer from "../hooks/useGlobalReducer.jsx"


export const CharacterDetails = () => {
    const {store} = useGlobalReducer();
    
    return (
        <div className="container mt-3">
            <h1 className="text-center">Detalles del personaje</h1>
            <p>{store.currentCharacter.name}</p>
        </div>
    )
}