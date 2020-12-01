import React from 'react';

export const Pokemon = ({ pokemon }) => {
	const attacks = pokemon.attacks.special;
	return (
		<>
			<div className='pokemon'>
				<h3 className='pokemon__name'>{pokemon.name}</h3>
				<img className='pokemon__image' src={pokemon.image} alt={pokemon.name} />
				<div className='pokemon__meta'>
					<span>{pokemon.maxHP}</span>
					<span>{pokemon.maxCP}</span>
				</div>
				<div className='pokemon__attacks'>
					{attacks.map((attack) => (
						<span key={`${attack.name}-${attack.damage}`}>
							{attack.name} - {attack.damage}pts
						</span>
					))}
				</div>
			</div>
			<hr />
		</>
	);
};
