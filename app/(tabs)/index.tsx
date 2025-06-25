import * as Battery from "expo-battery";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const [isAvailable, setIsAvailbable] = useState<boolean>(false);
	const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

	useEffect(() => {
		const checkAvailability = async () => {
			const available = await Battery.isAvailableAsync();
			console.log(available);
			setIsAvailbable(available);
		};
		checkAvailability();
	}, []);

	useEffect(() => {
		const fetchBatteryLevel = async () => {
			const level = await Battery.getBatteryLevelAsync();
			console.log(level);
			setBatteryLevel(level);
		};
		fetchBatteryLevel();
	}, []);

	return (
		<View style={styles.container}>
			<Text>{isAvailable ? "Battery availble :)" : "Battery NOT availble! :("}</Text>
			<Text>
				{batteryLevel !== null
					? `Current Battery Level: ${(batteryLevel * 100).toFixed(0)}%`
					: "Fetching battery level..."}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
});
