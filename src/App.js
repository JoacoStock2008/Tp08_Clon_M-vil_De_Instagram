import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AppNavigator from "./navigation/AppNavigator"

function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
				<View style={styles.container}>
					<StatusBar style="light" />
					<AppNavigator />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#111327",
	},
	container: {
		flex: 1,
		backgroundColor: "#0d0f1a",
	},
})

export default App
