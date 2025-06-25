import * as Battery from "expo-battery";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const [isAvailable, setIsAvailbable] = useState<boolean>(false);
	const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
	const apiUrl = `https://e52e-37-64-102-102.ngrok-free.app`;

	useEffect(() => {
		const checkAvailability = async () => {
			const available = await Battery.isAvailableAsync();
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

	const handleSendBattery = async () => {
		try {
			if (isAvailable !== true) throw new Error("Battery not available");

			const response = await fetch(`${apiUrl}battery`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ level: batteryLevel }),
			});

			if (!response.ok) throw new Error("Failed to send battery level");

			const result = await response.json();
			console.log(result);

			Alert.alert("Battery level sent! :)", JSON.stringify(result));
		} catch (err) {
			const error = err as Error;
			Alert.alert("Error", error.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text>{isAvailable ? "Battery availble :)" : "Battery NOT availble! :("}</Text>
			<Text>
				{batteryLevel !== null
					? `Current Battery Level: ${(batteryLevel * 100).toFixed(0)}%`
					: "Fetching battery level..."}
			</Text>
			<Button title="Send Battery Level" onPress={handleSendBattery} />
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
