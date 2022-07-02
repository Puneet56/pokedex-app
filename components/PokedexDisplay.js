import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Camera, CameraType, takePictureAsync } from "expo-camera";
import { useAppContext } from "./../Context/Context";

const PokedexDisplay = () => {
	const [hasPermission, setHasPermission] = useState(null);

	const { setCameraReady, setCameraRef } = useAppContext();

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
		<>
			<View style={styles.displayContainer}>
				<Camera
					ref={(r) => {
						setCameraRef(r);
					}}
					onCameraReady={handleCameraReady}
					style={styles.camera}
					type={CameraType.back}
				></Camera>
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
		height: "100%",
	},
	captureButton: {
		position: "absolute",
		bottom: "10px",
		transform: "translateX(50%)",
	},
});
