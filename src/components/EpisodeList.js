import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
	const [ episodes, setEpisodes ] = useState([]);

	useEffect(() => {
		// TODO: Add AJAX/API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get(`https://rickandmortyapi.com/api/episode/`).then((res) => {
			console.log(res.data.results);
			setEpisodes(res.data.results);
		});
	}, []);

	return (
		<section className="character-list grid-view">
			{episodes.map((episode) => {
				return <EpisodeCard {...episode} />;
			})}
		</section>
	);
}
