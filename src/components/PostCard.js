import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Avatar from "./Avatar"
import PostActions from "./PostActions"

function PostCard({ post, onLike, onOpenPost }) {
	return (
		<Pressable style={styles.card} onPress={() => onOpenPost(post)}>
			<Image source={{ uri: post.imageUrl }} style={styles.image} resizeMode="cover" />
			<View style={styles.footer}>
				<View style={styles.userRow}>
					<Avatar source={post.avatar} size={28} seen />
					<View style={styles.userTextContainer}>
						<Text style={styles.username}>{post.username}</Text>
						<Text style={styles.caption} numberOfLines={1}>{post.caption}</Text>
					</View>
				</View>
				<PostActions post={post} onLike={onLike} />
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	card: {
		width: "100%",
		marginBottom: 18,
		borderRadius: 18,
		overflow: "hidden",
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
	},
	image: {
		width: "100%",
		height: 360,
		backgroundColor: "#0d0f1a",
	},
	footer: {
		paddingHorizontal: "4%",
		paddingVertical: 12,
		gap: 12,
	},
	userRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	userTextContainer: {
		flex: 1,
	},
	username: {
		fontSize: 13,
		fontWeight: "800",
		color: "#ffffff",
	},
	caption: {
		marginTop: 2,
		fontSize: 12,
		color: "#a0a3b1",
	},
})

export default PostCard
