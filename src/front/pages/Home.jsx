import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()



	useEffect(() => {
		
	}, [])

	return (
		<div className="text-center mt-5">
			<h1 className="display -4"> Star wars</h1>
			<p className="lead">
				<Link to="/contact" className="btn btn-primary me-2">Contact List</Link>
				<Link to="/add-contact" className="btn btn-success">Add Contact</Link>
			</p>
			
		</div>
	);
}; 