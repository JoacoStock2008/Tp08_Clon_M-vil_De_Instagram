import { Pressable, StyleSheet, Text, View } from "react-native"
import { formatCount } from "../data/userData"

function PostActions({ post, onLike }) {
	return (
		<View style={styles.container}>
			<Pressable style={styles.action} onPress={() => onLike(post.id)}>
				<Text style={[styles.icon, post.liked && styles.liked]}>{post.liked ? "♥" : "♡"}</Text>
				<Text style={styles.count}>{formatCount(post.likes)}</Text>
			</Pressable>
			<Text style={styles.icon}>💬</Text>
			<Text style={styles.icon}>✈️</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	action: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	icon: {
		fontSize: 22,
		color: "#ffffff",
	},
	liked: {
		color: "#e1306c",
	},
	count: {
		fontSize: 13,
		fontWeight: "700",
		color: "#ffffff",
	},
})

export default PostActions
