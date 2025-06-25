// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { OpaqueColorValue } from "react-native";

type MyIconMap = {
	[key: string]: string;
};

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: MyIconMap = {
	battery: "battery-full",
	gps: "gps-fixed",
};
/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export const IconSymbol = ({ name, size = 24, color }: { name: string; size?: number; color: string | OpaqueColorValue }) => {
	const iconName = MAPPING[name] ?? "help";
	return <MaterialIcons name={iconName as any} size={size} color={color} />;
};
