import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style={{ backgroundColor: "black" }} />
			<View style={styles.pokedexContainer}>
				<Image source={require("./assets/pokedex.jpg")} style={styles.pokedexImage}></Image>
				<View style={styles.infoContainer}></View>
			</View>
		</View>
	);
}

const pokedexColor = "#e62e2e";
const bgColor = "#e53b3b";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	pokedexContainer: {
		position: "relative",
		flex: 1,
		alignItems: "start",
		justifyContent: "start",
		backgroundColor: "#e53b3b",
		width: "100%",
		height: "100%",
	},
	pokedexImage: {
		flex: 1,
		resizeMode: "contain",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		height: "100%",
		maxHeight: "80%",
		aspectRatio: 0.67,
	},
	infoContainer: {
		position: "absolute",
		top: "26%",
		width: "82%",
		aspectRatio: 1.01,
		backgroundColor: "black",
	},
});
