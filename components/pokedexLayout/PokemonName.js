import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "../../Context/Context";

export default function PokemonName() {
	const { identifiedPokemon, fetchingState } = useAppContext();

	let pokemonName = "Waiting to Scan";

	if (fetchingState === "fetching") {
		pokemonName = "Identifying....";
	}

	if (identifiedPokemon) {
		pokemonName = identifiedPokemon.label;
	}

	if (fetchingState === "error") {
		pokemonName = "Cannot Identify :(";
	}

	return (
		<View style={styles.name}>
			<Text style={{ fontSize: 20, fontFamily: "Dot" }}>{pokemonName}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	name: {
		width: "90%",
		maxWidth: "90%",
		height: "80%",
		maxHeight: "80%",
		backgroundColor: "silver",
		alignItems: "center",
		justifyContent: "center",
	},
});
