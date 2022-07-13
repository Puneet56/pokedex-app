import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { useAppContext } from "./../../Context/Context";

export default function ListingButton() {
	const handleShowList = async () => {};

	return (
		<Pressable style={styles.button} onPress={handleShowList}>
			<Image style={styles.image} source={require("./../../assets/listbutton.png")}></Image>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		maxWidth: "40%",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		letterSpacing: 0.25,
		color: "white",
		fontFamily: "Dot",
	},
	image: {
		flex: 1,
		resizeMode: "contain",
		maxWidth: "100%",
		maxHeight: 65,
	},
});
