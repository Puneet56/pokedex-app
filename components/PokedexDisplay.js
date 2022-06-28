import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PokedexDisplay = () => {
	return (
		<View style={styles.displayContainer}>
			<Text>PokedexDisplay</Text>
		</View>
	);
};

export default PokedexDisplay;

const styles = StyleSheet.create({
	displayContainer: {
		width: "90%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "pink",
	},
});
