import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { takePictureAsync } from "expo-camera";
import { useAppContext } from "./../../Context/Context";
import axios from "axios";

export default function CaptureButton() {
	const { cameraReady, cameraRef, identifiedPokemon, setIdentifiedPokemon, fetchingState, setFetchingState } = useAppContext();

	const handleCapture = async () => {
		if (identifiedPokemon || fetchingState === "error") {
			setIdentifiedPokemon(null);
			setFetchingState("notFetching");
			return;
		}
		setFetchingState("fetching");
		const photo = await cameraRef.takePictureAsync({
			quality: 0.5,
		});
		const formData = new FormData();
		const image = {
			uri: photo.uri,
			name: "image.jpg",
			type: "image/jpg",
		};

		formData.append("image", image);

		try {
			const data = await axios.post("https://pokedex-api-puneet.herokuapp.com/api/identify", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(data.data);
			setIdentifiedPokemon(data.data);
			setFetchingState("notFetching");
		} catch (error) {
			console.log(error);
			setFetchingState("error");
		}
	};

	return (
		<Pressable style={styles.button} onPress={handleCapture} disabled={fetchingState === "fetching"}>
			{identifiedPokemon?.label ? (
				<Image style={styles.image} source={require("./../../assets/rescan.png")}></Image>
			) : (
				<Image style={styles.image} source={require("./../../assets/scanbutton.png")}></Image>
			)}
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
