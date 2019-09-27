import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

import { Loader } from 'semantic-ui-react';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		// TODO: Add AJAX/API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get(`https://rickandmortyapi.com/api/character/`).then((res) => {
			console.log(res.data.results);
			setCharacters(res.data.results);
			setIsLoading(false);
		});
	}, []);

	return isLoading ? (
		<Loader active inline="centered" />
	) : (
		<section className="character-list grid-view">
			{characters.map((character) => {
				return <CharacterCard {...character} />;
			})}
		</section>
	);
}
