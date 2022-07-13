import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, Button, Image, ImageBackground } from "react-native";
import PokedexLayout from "./components/pokedexLayout";
import ContextProvider from "./Context/Context";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";

export default function App() {
	let [fontsLoaded] = useFonts({
		Dot: require("./assets/DotGothic16-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View style={{ alignItems: "center", justifyContent: "center" }}>
				<Feather name="loader" size={24} color="black" />
			</View>
		);
	}

	return (
		<ContextProvider>
			<View style={styles.container}>
				<StatusBar style={{ backgroundColor: "black" }} />
				<PokedexLayout />
			</View>
		</ContextProvider>
	);
}

const pokedexColor = "#e62e2e";
const bgColor = "#e53b3b";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: "#e53b3b",
	},
	pokedexImage: {
		position: "absolute",
		top: "50px",
		flex: 1,
		resizeMode: "contain",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
		aspectRatio: 0.67,
	},
	pokedexTopImage: {
		display: "flex",
		borderWidth: 1,
		borderColor: "blue",
		resizeMode: "contain",
		width: "450px",
		height: "115px",
		maxHeight: "20%",
		maxWidth: "100%",
		aspectRatio: 0.257,
	},
	infoContainer: {
		width: "82%",
		maxWidth: "82%",
		aspectRatio: 1.03,
		backgroundColor: "black",
	},
});
