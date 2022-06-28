import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, Button, Image, ImageBackground } from "react-native";

export default function App() {
	const ref = useRef(null);
	const [topValue, setTopValue] = useState(0);

	const handleStyleChange = (e) => {
		console.log("WIDTH", e.nativeEvent.layout.width, "HEIGHT", e.nativeEvent.layout.height);
		const width = e.nativeEvent.layout.width;
		const height = e.nativeEvent.layout.height;
		setTopValue();
	};

	console.log(topValue);

	return (
		<View style={styles.container}>
			<StatusBar style={{ backgroundColor: "black" }} />
			<View ref={ref} onLayout={handleStyleChange} style={[styles.pokedexContainer]}>
				<Image source={require("./assets/pokedex.jpg")} style={styles.pokedexImage}></Image>
				<View style={[styles.infoContainer, { top: topValue }]}></View>
			</View>
		</View>
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
	pokedexContainer: {
		position: "relative",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		borderColor: "black",
		borderWidth: 1,
		width: "450px",
		maxWidth: "95%",
		maxHeight: "671px",
		aspectRatio: 0.67,
	},
	pokedexImage: {
		position: "absolute",
		top: "50px",
		flex: 1,
		resizeMode: "contain",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
		height: "100%",
		aspectRatio: 0.67,
	},
	infoContainer: {
		position: "absolute",
		left: "9%",
		width: "82%",
		maxWidth: "82%",
		aspectRatio: 1.03,
		backgroundColor: "black",
	},
});
