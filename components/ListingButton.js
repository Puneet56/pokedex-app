import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "./../Context/Context";

export default function ListingButton() {
	const handleShowList = async () => {};

	return (
		<Pressable style={styles.button} onPress={handleShowList}>
			<Text style={styles.text}>All PokeMon</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#ff7f2d",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
