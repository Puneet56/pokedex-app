import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PokedexDisplay from "./PokedexDisplay";
import BlinkIndicator from "./BlinkIndicator";
import CaptureButton from "./CaptureButton";
import ListingButton from "./ListingButton";
import { useAppContext } from "./../../Context/Context";
import PokemonName from "./PokemonName";

const PokedexLayout = () => {
	return (
		<View style={styles.pokedexContainer}>
			<View style={styles.header}>
				<BlinkIndicator />
				<Text style={styles.heading}>PokeDex</Text>
			</View>
			<View style={styles.displayContainer}>
				<View style={styles.rims}></View>
				<PokedexDisplay />
				<View style={styles.rims}></View>
			</View>
			<View style={styles.nameContainer}>
				<PokemonName />
			</View>
			<View style={styles.footer}>
				<CaptureButton />
				<ListingButton />
			</View>
		</View>
	);
};

export default PokedexLayout;

const styles = StyleSheet.create({
	pokedexContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
		width: 450,
		maxWidth: "95%",
		maxHeight: 671,
		aspectRatio: 0.67,
		borderRadius: 10,
		borderColor: "black",
		marginTop: 80,
		elevation: 20,
		overflow: "hidden",
		borderWidth: 2,
		borderColor: "black",
	},
	header: {
		paddingHorizontal: "5%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		maxWidth: "100%",
		height: "17%",
		maxHeight: "17%",
		backgroundColor: "#e62e2e",
	},
	heading: {
		fontSize: 30,
		color: "black",
		fontFamily: "Dot",
	},
	displayContainer: {
		width: "100%",
		maxWidth: "100%",
		height: "60%",
		maxHeight: "60%",
		backgroundColor: "#e62e2e",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rims: {
		height: "100%",
		minHeight: "100%",
		width: "5%",
		maxWidth: "5%",
		backgroundColor: "#e62e2e",
	},
	nameContainer: {
		width: "100%",
		maxWidth: "100%",
		height: "8%",
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "#e62e2e",
	},
	footer: {
		paddingHorizontal: "5%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		maxWidth: "100%",
		height: "15%",
		maxHeight: "23%",
		backgroundColor: "#e62e2e",
	},
});
