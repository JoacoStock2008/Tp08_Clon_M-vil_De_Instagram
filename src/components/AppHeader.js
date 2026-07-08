import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

function AppHeader({ title = "Instagram", showSearch = true }) {
	return (
		<View style={styles.header}>
			<View style={styles.logoRow}>
				<Text style={styles.logoIcon}>📷</Text>
				<Text style={styles.logo}>{title}</Text>
			</View>

			{showSearch && (
				<View style={styles.searchContainer}>
					<Text style={styles.searchIcon}>🔍</Text>
					<TextInput
						style={styles.searchInput}
						placeholder="Buscar"
						placeholderTextColor="#6b6f82"
					/>
				</View>
			)}

			<View style={styles.actions}>
				<Pressable style={styles.iconButton}><Text style={styles.actionText}>✈️</Text></Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		paddingHorizontal: "4%",
		paddingVertical: 12,
		backgroundColor: "#111327",
		borderBottomWidth: 1,
		borderBottomColor: "#252840",
	},
	logoRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12,
		gap: 8,
	},
	logoIcon: {
		fontSize: 23,
	},
	logo: {
		fontSize: 24,
		fontWeight: "800",
		letterSpacing: 0.5,
		color: "#ffffff",
	},
	searchContainer: {
		width: "100%",
		minHeight: 42,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 14,
		borderRadius: 22,
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
	},
	searchIcon: {
		marginRight: 8,
		fontSize: 14,
	},
	searchInput: {
		flex: 1,
		fontSize: 14,
		color: "#ffffff",
	},
	actions: {
		position: "absolute",
		right: "4%",
		top: 14,
	},
	iconButton: {
		width: 34,
		height: 34,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 17,
		backgroundColor: "#161829",
	},
	actionText: {
		fontSize: 17,
	},
})

export default AppHeader
