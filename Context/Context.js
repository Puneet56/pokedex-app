import { View, Text } from "react-native";
import React, { useContext, createContext, useRef } from "react";
import { useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

export default function ContextProvider(props) {
	const [cameraReady, setCameraReady] = useState(false);
	const [cameraRef, setCameraRef] = useState(null);

	const value = {
		cameraReady,
		setCameraReady,
		cameraRef,
		setCameraRef,
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
