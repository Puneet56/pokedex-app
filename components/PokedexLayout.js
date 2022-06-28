import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PokedexDisplay from "./PokedexDisplay";

const PokedexLayout = () => {
	return (
		<View style={styles.pokedexContainer}>
			<View style={styles.header}>
				<Text>a</Text>
				<Text style={styles.heading}>PokeDex</Text>
			</View>
			<View style={styles.displayContainer}>
				<View style={styles.rims}></View>
				<PokedexDisplay />
				<View style={styles.rims}></View>
			</View>
			<View style={styles.footer}>
				<Text>a</Text>
				<Text style={styles.heading}>PokeDex</Text>
			</View>
		</View>
	);
};

export default PokedexLayout;

const styles = StyleSheet.create({
	pokedexContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
		borderColor: "black",
		borderWidth: 1,
		width: "450px",
		maxWidth: "95%",
		maxHeight: "671px",
		aspectRatio: 0.67,
		marginTop: "50px",
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
		backgroundColor: "blue",
	},
	heading: {
		fontSize: "20px",
		fontWeight: "bold",
		color: "black",
	},
	displayContainer: {
		width: "100%",
		maxWidth: "100%",
		height: "60%",
		maxHeight: "60%",
		backgroundColor: "yellow",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rims: {
		height: "100%",
		minHeight: "100%",
		width: "5%",
		maxWidth: "5%",
		backgroundColor: "green",
	},
	footer: {
		paddingHorizontal: "5%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		maxWidth: "100%",
		height: "23%",
		maxHeight: "23%",
		backgroundColor: "purple",
	},
});
