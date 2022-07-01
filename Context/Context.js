import { View, Text } from "react-native";
import React, { useContext, createContext } from "react";
import { useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

export default function ContextProvider(props) {
	const [cameraReady, setCameraReady] = useState(false);

	const value = {
		cameraReady,
		setCameraReady,
	};

	return <Context.Provider value={value}>{props.data}</Context.Provider>;
}
