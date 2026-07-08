import { useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import Avatar from "./Avatar"

function StoryCircle({ story }) {
	const [seen, setSeen] = useState(false)

	return (
		<Pressable style={styles.container} onPress={() => setSeen(true)}>
			<Avatar source={story.imageUrl} size={64} seen={seen} />
			<Text style={styles.username} numberOfLines={1}>{story.username}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 82,
		alignItems: "center",
		marginRight: 12,
	},
	username: {
		width: "100%",
		marginTop: 6,
		fontSize: 11,
		color: "#d8d9e3",
		textAlign: "center",
	},
})

export default StoryCircle
