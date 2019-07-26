import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard({ img, name, species, status, location, origin, episode }) {
	return (
		<Card>
			<Image src={img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
					<span className="Staus">
						{species} {status}
					</span>
				</Card.Meta>
				<Card.Description>
					Location:{location}
					Origin:{origin}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name="user" />
					Episodes: {episode}
				</a>
			</Card.Content>
		</Card>
	);
}
