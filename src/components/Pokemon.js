import React from 'react';

export const Pokemon = ({ pokemon }) => {
	return (
		<div>
			<p>{pokemon.id}</p>
			<p>{pokemon.name}</p>
		</div>
	);
};
