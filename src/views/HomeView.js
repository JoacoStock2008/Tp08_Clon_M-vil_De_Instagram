import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native"
import { useState } from "react"
import AppHeader from "../components/AppHeader"
import PostCard from "../components/PostCard"
import PostDetailModal from "../components/PostDetailModal"
import StoriesList from "../components/StoriesList"
import { usePosts } from "../hooks/usePosts"

function HomeView() {
	const { posts, loading, error, loadPosts, toggleLike } = usePosts(12)
	const [selectedPost, setSelectedPost] = useState(null)

	return (
		<View style={styles.screen}>
			<AppHeader />
			<FlatList
				data={posts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<PostCard post={item} onLike={toggleLike} onOpenPost={setSelectedPost} />
				)}
				ListHeaderComponent={(
					<View>
						<StoriesList />
						<Text style={styles.title}>TRENDING</Text>
						{error && <Text style={styles.error}>{error}</Text>}
					</View>
				)}
				ListEmptyComponent={!loading && <Text style={styles.empty}>No hay publicaciones para mostrar.</Text>}
				contentContainerStyle={styles.listContent}
				showsVerticalScrollIndicator={false}
				refreshControl={<RefreshControl refreshing={loading} onRefresh={loadPosts} tintColor="#ffffff" />}
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
	listContent: {
		width: "92%",
		alignSelf: "center",
		paddingBottom: 26,
	},
	title: {
		marginBottom: 16,
		fontSize: 18,
		fontWeight: "700",
		letterSpacing: 2,
		color: "#ffffff",
	},
	error: {
		marginBottom: 12,
		padding: 12,
		borderRadius: 12,
		backgroundColor: "#2d1826",
		color: "#ffffff",
	},
	empty: {
		paddingVertical: 30,
		fontSize: 14,
		textAlign: "center",
		color: "#a0a3b1",
	},
})

export default HomeView
