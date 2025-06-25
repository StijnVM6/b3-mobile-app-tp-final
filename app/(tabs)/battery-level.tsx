import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

type BatteryEntry = {
	id: number;
	level: number;
	timestamp: string;
};

export default function HistoryScreen() {
	const [batteryLevels, setBatteryLevels] = useState<BatteryEntry[] | null>(null);
	const apiUrl = `https://e52e-37-64-102-102.ngrok-free.app`;

	useEffect(() => {
		const fetchBatteryLevels = async () => {
			try {
				const response = await fetch(`${apiUrl}battery`);
				if (!response.ok) throw new Error("Failed to send battery level");

				const result: BatteryEntry[] = await response.json();
				setBatteryLevels(result);
				Alert.alert("Battery level sent!", JSON.stringify(result));
			} catch (err) {
				const error = err as Error;
				Alert.alert("Error", error.message);
			}
		};

		fetchBatteryLevels();
	}, []);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Battery History</Text>
			{batteryLevels === null ? (
				<Text>Loading...</Text>
			) : (
				batteryLevels.map((entry) => (
					<Text key={entry.id}>
						{new Date(entry.timestamp).toLocaleString()} - {(entry.level * 100).toFixed(0)}%
					</Text>
				))
			)}
		</ScrollView>
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
	title: {
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 15,
	},
});
