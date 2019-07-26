import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard({ image, name, species, status, location, origin, episode }) {
	return (
		<Card>
			<Image src={image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
					<span className="Staus">
						{species} {status}
					</span>
				</Card.Meta>
				<Card.Description>
					Location:{location && location.name}
					<br />
					Origin:{origin && origin.name}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name="user" />
					Episodes
				</a>
			</Card.Content>
		</Card>
	);
}
