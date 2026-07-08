import { Image, StyleSheet, View } from "react-native"

function Avatar({ source, size = 44, seen = false }) {
	return (
		<View style={[styles.ring, { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 }, seen && styles.seenRing]}>
			<Image
				source={{ uri: source }}
				style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	ring: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#e1306c",
		borderWidth: 2,
		borderColor: "#fdc468",
	},
	seenRing: {
		backgroundColor: "#45495f",
		borderColor: "#45495f",
	},
	image: {
		backgroundColor: "#1a1d2e",
		borderWidth: 2,
		borderColor: "#0d0f1a",
	},
})

export default Avatar
