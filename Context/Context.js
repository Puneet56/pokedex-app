import { View, Text } from "react-native";
import React, { useContext, createContext, useRef } from "react";
import { useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

export default function ContextProvider(props) {
	const [cameraReady, setCameraReady] = useState(false);
	const [cameraRef, setCameraRef] = useState(null);
	const [identifiedPokemon, setIdentifiedPokemon] = useState(null);
	const [fetchingState, setFetchingState] = useState("notFetching");

	const value = {
		cameraReady,
		setCameraReady,
		cameraRef,
		setCameraRef,
		identifiedPokemon,
		setIdentifiedPokemon,
		fetchingState,
		setFetchingState,
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
