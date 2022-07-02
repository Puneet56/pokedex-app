import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { takePictureAsync } from "expo-camera";
import { useAppContext } from "./../Context/Context";
import axios from "axios";

export default function CaptureButton() {
	const { cameraReady, cameraRef } = useAppContext();

	const handleCapture = async () => {
		const photo = await cameraRef.takePictureAsync({
			quality: 0.5,
		});
		console.log(photo);
		const formData = new FormData();

		const image = {
			uri: photo.uri,
			name: "image.jpg",
			type: "image/jpg",
		};

		formData.append("image", image);

		console.log(formData);

		try {
			const data = await axios.post("https://f298-150-242-60-53.in.ngrok.io", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			// const data = await axios.get("https://reqres.in/api/users", formData);
			console.log(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Pressable style={styles.button} onPress={handleCapture}>
			<Text style={styles.text}>Capture</Text>
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
		backgroundColor: "#00ba2c",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
