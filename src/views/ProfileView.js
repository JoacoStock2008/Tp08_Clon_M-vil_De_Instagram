import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useState } from "react"
import AppHeader from "../components/AppHeader"
import ProfileHeader from "../components/ProfileHeader"
import PostDetailModal from "../components/PostDetailModal"
import { usePosts } from "../hooks/usePosts"

function ProfileView() {
	const [activeTab, setActiveTab] = useState("posts")
	const [selectedPost, setSelectedPost] = useState(null)
	const { posts, toggleLike } = usePosts(9)

	return (
		<View style={styles.screen}>
			<AppHeader title="Profile" showSearch={false} />
			<FlatList
				data={activeTab == "posts" ? posts : []}
				keyExtractor={(item) => item.id}
				numColumns={3}
				contentContainerStyle={styles.content}
				ListHeaderComponent={(
					<View>
						<ProfileHeader />
						<View style={styles.tabs}>
							<Pressable style={[styles.tab, activeTab == "posts" && styles.activeTab]} onPress={() => setActiveTab("posts")}>
								<Text style={[styles.tabText, activeTab == "posts" && styles.activeTabText]}>▣ POSTS</Text>
							</Pressable>
							<Pressable style={[styles.tab, activeTab == "saved" && styles.activeTab]} onPress={() => setActiveTab("saved")}>
								<Text style={[styles.tabText, activeTab == "saved" && styles.activeTabText]}>🔖 GUARDADOS</Text>
							</Pressable>
						</View>
					</View>
				)}
				renderItem={({ item }) => (
					<Pressable style={styles.gridItem} onPress={() => setSelectedPost(item)}>
						<Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
					</Pressable>
				)}
				ListEmptyComponent={activeTab == "saved" && <Text style={styles.empty}>📌 No hay publicaciones guardadas todavía.</Text>}
				showsVerticalScrollIndicator={false}
			/>

			<PostDetailModal
				post={selectedPost}
				visible={selectedPost != null}
				onClose={() => setSelectedPost(null)}
				onLike={toggleLike}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#0d0f1a",
	},
	content: {
		width: "92%",
		alignSelf: "center",
		paddingBottom: 28,
	},
	tabs: {
		width: "100%",
		flexDirection: "row",
		marginTop: 18,
		marginBottom: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#252840",
	},
	tab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 2,
		borderBottomColor: "transparent",
	},
	activeTab: {
		borderBottomColor: "#ffffff",
	},
	tabText: {
		fontSize: 12,
		fontWeight: "800",
		color: "#6b6f82",
	},
	activeTabText: {
		color: "#ffffff",
	},
	gridItem: {
		width: "32%",
		aspectRatio: 1,
		margin: "0.66%",
		borderRadius: 6,
		overflow: "hidden",
		backgroundColor: "#161829",
	},
	gridImage: {
		width: "100%",
		height: "100%",
	},
	empty: {
		paddingVertical: 40,
		fontSize: 14,
		textAlign: "center",
		color: "#a0a3b1",
	},
})

export default ProfileView
