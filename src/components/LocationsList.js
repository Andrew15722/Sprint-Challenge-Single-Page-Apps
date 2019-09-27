import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { Loader } from 'semantic-ui-react';

export default function LocationsList() {
	const [ locations, setLocations ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		// TODO: Add AJAX/API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get(`https://rickandmortyapi.com/api/location/`).then((res) => {
			console.log(res.data.results);
			setLocations(res.data.results);
			setIsLoading(false);
		});
	}, []);

	return isLoading ? (
		<Loader active inline="centered" />
	) : (
		<section className="character-list grid-view">
			{locations.map((location) => {
				return <LocationCard {...location} />;
			})}
		</section>
	);
}
