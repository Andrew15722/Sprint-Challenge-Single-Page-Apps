import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ character, setCharacter ] = useState([]);

	useEffect(() => {
		// TODO: Add AJAX/API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get(`https://rickandmortyapi.com/api/character/`).then((res) => {
			console.log(res.data.results);
			setCharacter(...res.data.results);
		});
	}, []);

	return (
		<section className="character-list grid-view">
			{character.map((char) => {
				return (
					<CharacterCard
						img={char.url}
						name={char.name}
						species={char.species}
						status={char.status}
						location={char.location}
						origin={char.origin}
						episode={char.episode}
					/>
				);
			})}
		</section>
	);
}
