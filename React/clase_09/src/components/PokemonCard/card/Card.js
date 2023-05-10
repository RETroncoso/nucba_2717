import React from "react";
import PokemonImage from "../pokemonImage/PokemonImage";
import StatusBar from "../statusBar/StatusBar";
import Type from "../type/Type";

import {
	CardContainerStyled,
	CardStatusContainerStyled,
	CardTypeContainerStyled,
	CardTextContentContainerStyled,
} from "./CardStyles";

const Pokemon = (props) => {
	const { name, order, sprites, stats, types } = props;

	return (
		<CardContainerStyled>
			<PokemonImage image={sprites?.other.home.front_default} alt={name} />

			<CardTextContentContainerStyled>
				<h2>{name}</h2>
				<h3>{order}</h3>
			</CardTextContentContainerStyled>

			<CardStatusContainerStyled>
				{stats?.slice(0, 4).map((stat) => (
					<StatusBar
						key={stat.stat.name}
						{...stat}
						firstType={types[0].type.name}
					/>
				))}
			</CardStatusContainerStyled>

			<CardTypeContainerStyled>
				<p>Tipo: </p>
				{types?.map((type) => (
					<Type key={type.slot} typeName={type.type.name} />
				))}
			</CardTypeContainerStyled>
		</CardContainerStyled>
	);
};

export default Pokemon;
