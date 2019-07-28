import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function LocationCard({ name, air_date, episode }) {
	return (
		<Card>
			<Card.Content>
				<Card.Header> Title: {name}</Card.Header>
				<Card.Meta>
					<span className="Staus"> ep: {episode}</span>
				</Card.Meta>
				<Card.Description />
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name="user" />
					Air Date: {air_date}
				</a>
			</Card.Content>
		</Card>
	);
}
