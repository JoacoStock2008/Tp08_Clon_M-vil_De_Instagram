import { FlatList, StyleSheet, Text, View } from "react-native"
import StoryCircle from "./StoryCircle"
import { useStories } from "../hooks/useStories"

function StoriesList() {
	const { stories, loading } = useStories(7)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>STORIES</Text>
			{loading ? (
				<View style={styles.loadingRow}>
					{[1, 2, 3, 4].map((item) => <View key={item} style={styles.skeleton} />)}
				</View>
			) : (
				<FlatList
					horizontal
					data={stories}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <StoryCircle story={item} />}
					showsHorizontalScrollIndicator={false}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingVertical: 16,
	},
	title: {
		marginBottom: 14,
		fontSize: 18,
		fontWeight: "700",
		letterSpacing: 2,
		color: "#ffffff",
	},
	loadingRow: {
		flexDirection: "row",
		gap: 12,
	},
	skeleton: {
		width: 72,
		height: 72,
		borderRadius: 36,
		backgroundColor: "#1a1d2e",
	},
})

export default StoriesList
