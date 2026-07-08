import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Avatar from "./Avatar"
import PostActions from "./PostActions"
import { fakeComments } from "../data/userData"

function PostDetailModal({ post, visible, onClose, onLike }) {
	if (post == null) {
		return null
	}

	return (
		<Modal animationType="slide" visible={visible} onRequestClose={onClose}>
			<View style={styles.screen}>
				<View style={styles.header}>
					<Text style={styles.title}>Publicación</Text>
					<Pressable style={styles.closeButton} onPress={onClose}>
						<Text style={styles.closeText}>✕</Text>
					</Pressable>
				</View>

				<ScrollView contentContainerStyle={styles.content}>
					<Image source={{ uri: post.imageUrl }} style={styles.image} resizeMode="contain" />

					<View style={styles.infoCard}>
						<View style={styles.userRow}>
							<Avatar source={post.avatar} size={38} seen />
							<View>
								<Text style={styles.username}>{post.username}</Text>
								<Text style={styles.date}>{post.date}</Text>
							</View>
						</View>

						<Text style={styles.caption}><Text style={styles.bold}>{post.username} </Text>{post.caption}</Text>
						<PostActions post={post} onLike={onLike} />

						<View style={styles.commentsContainer}>
							{fakeComments.slice(0, 5).map((comment, index) => (
								<Text key={index} style={styles.comment}><Text style={styles.bold}>{comment.user} </Text>{comment.text}</Text>
							))}
						</View>

						<View style={styles.commentInputRow}>
							<TextInput
								style={styles.commentInput}
								placeholder="Agregá un comentario..."
								placeholderTextColor="#6b6f82"
							/>
							<Text style={styles.publishText}>Publicar</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#0d0f1a",
	},
	header: {
		width: "100%",
		paddingTop: 50,
		paddingHorizontal: "4%",
		paddingBottom: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#111327",
		borderBottomWidth: 1,
		borderBottomColor: "#252840",
	},
	title: {
		fontSize: 19,
		fontWeight: "800",
		color: "#ffffff",
	},
	closeButton: {
		width: 34,
		height: 34,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 17,
		backgroundColor: "#161829",
	},
	closeText: {
		fontSize: 18,
		color: "#ffffff",
	},
	content: {
		paddingBottom: 28,
	},
	image: {
		width: "100%",
		height: 430,
		backgroundColor: "#000000",
	},
	infoCard: {
		width: "92%",
		alignSelf: "center",
		marginTop: 14,
		padding: 14,
		borderRadius: 18,
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
		gap: 14,
	},
	userRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	username: {
		fontSize: 14,
		fontWeight: "800",
		color: "#ffffff",
	},
	date: {
		fontSize: 12,
		color: "#a0a3b1",
	},
	caption: {
		fontSize: 14,
		lineHeight: 20,
		color: "#d8d9e3",
	},
	bold: {
		fontWeight: "800",
		color: "#ffffff",
	},
	commentsContainer: {
		gap: 8,
	},
	comment: {
		fontSize: 13,
		lineHeight: 19,
		color: "#d8d9e3",
	},
	commentInputRow: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 8,
		borderTopWidth: 1,
		borderTopColor: "#252840",
	},
	commentInput: {
		flex: 1,
		fontSize: 14,
		color: "#ffffff",
	},
	publishText: {
		fontSize: 13,
		fontWeight: "800",
		color: "#e1306c",
	},
})

export default PostDetailModal
