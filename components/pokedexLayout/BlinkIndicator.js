import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useState, useEffect } from "react";

export default function BlinkIndicator() {
	return (
		<View style={styles.outerRing}>
			<Animatable.View style={styles.innerRing} animation="flash" iterationCount="infinite" iterationDelay={50}>
				<View style={styles.smallCircle}></View>
			</Animatable.View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerRing: {
		width: "25%",
		height: "auto",
		aspectRatio: 1,
		backgroundColor: "silver",
		borderRadius: 999,
		borderColor: "black",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	innerRing: {
		width: "80%",
		height: "auto",
		aspectRatio: 1,
		backgroundColor: "blue",
		borderRadius: 999,
		borderColor: "black",
		borderWidth: 2,
	},
	smallCircle: {
		width: "40%",
		height: "auto",
		aspectRatio: 1,
		marginLeft: "10%",
		marginTop: "10%",
		backgroundColor: "skyblue",
		borderRadius: 999,
	},
});
