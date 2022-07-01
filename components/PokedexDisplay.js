import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Camera, CameraType, takePictureAsync } from "expo-camera";

const PokedexDisplay = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraReady, setCameraReady] = useState(false);
	let camera;

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
		setCameraReady(true);
	};

	const handleImageCapture = async () => {
		try {
			const photo = await camera.takePictureAsync();
			console.log(photo);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<View style={styles.displayContainer}>
				<Camera
					ref={(r) => {
						camera = r;
					}}
					onCameraReady={handleCameraReady}
					style={styles.camera}
					type={CameraType.back}
				></Camera>
				<Button title="Capture" onPress={handleImageCapture} />
			</View>
		</>
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
	},
	camera: {
		width: "100%",
		height: "80%",
	},
	captureButton: {
		position: "absolute",
		bottom: "10px",
		transform: "translateX(50%)",
	},
});
