import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button, Image, ActivityIndicator } from "react-native";
import { Camera, CameraType, takePictureAsync } from "expo-camera";
import { useAppContext } from "./../../Context/Context";

const PokedexDisplay = () => {
	const [hasPermission, setHasPermission] = useState(null);

	const { setCameraReady, setCameraRef, identifiedPokemon, fetchingState } = useAppContext();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const handleCameraReady = () => {
		console.log("Camera ready");
		setCameraReady(true);
	};

	return (
		<View style={styles.displayContainer}>
			{fetchingState === "fetching" && (
				<View style={styles.maskContainer}>
					<ActivityIndicator size="large" color="black" />
					<Text style={styles.message}>Identifying...</Text>
				</View>
			)}
			{!identifiedPokemon?.image ? (
				<Camera
					ref={(r) => {
						setCameraRef(r);
					}}
					onCameraReady={handleCameraReady}
					style={styles.camera}
					type={CameraType.back}
				></Camera>
			) : (
				<Image
					style={styles.pokemonImage}
					source={{
						uri: identifiedPokemon.image,
					}}
				/>
			)}
		</View>
	);
};

export default PokedexDisplay;

const styles = StyleSheet.create({
	displayContainer: {
		position: "relative",
		width: "90%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#e62e2e",
		borderColor: "black",
		borderWidth: 2,
	},
	camera: {
		width: "100%",
		height: "100%",
	},
	captureButton: {
		position: "absolute",
		bottom: "10px",
		transform: "translateX(50%)",
	},
	pokemonImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	maskContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: 100,
		backgroundColor: "white",
		opacity: 0.8,
	},
	message: {
		color: "black",
		fontSize: 24,
	},
});
