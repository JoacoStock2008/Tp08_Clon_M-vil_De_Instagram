import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native"
import { useMemo, useState } from "react"
import AppHeader from "../components/AppHeader"
import { fakeUsers } from "../data/userData"
import { usePosts } from "../hooks/usePosts"

function SearchView() {
	const [searchText, setSearchText] = useState("")
	const { posts } = usePosts(15)

	const users = useMemo(() => {
		return fakeUsers.filter((user) => user.username.toLowerCase().includes(searchText.toLowerCase()))
	}, [searchText])

	return (
		<View style={styles.screen}>
			<AppHeader title="Explore" showSearch={false} />
			<View style={styles.content}>
				<View style={styles.searchBox}>
					<Text style={styles.searchIcon}>🔍</Text>
					<TextInput
						style={styles.input}
						value={searchText}
						onChangeText={setSearchText}
						placeholder="Buscar usuarios"
						placeholderTextColor="#6b6f82"
					/>
				</View>

				{searchText.length > 0 && (
					<View style={styles.usersCard}>
						{users.map((user) => (
							<View key={user.username} style={styles.userRow}>
								<Image source={{ uri: user.avatar }} style={styles.avatar} />
								<Text style={styles.username}>{user.username}</Text>
							</View>
						))}
					</View>
				)}

				<Text style={styles.title}>Explorar</Text>
				<FlatList
					data={posts}
					keyExtractor={(item) => item.id}
					numColumns={3}
					renderItem={({ item }) => <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#0d0f1a",
	},
	content: {
		flex: 1,
		width: "92%",
		alignSelf: "center",
		paddingTop: 16,
	},
	searchBox: {
		width: "100%",
		minHeight: 46,
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
		fontSize: 15,
	},
	input: {
		flex: 1,
		fontSize: 15,
		color: "#ffffff",
	},
	usersCard: {
		marginTop: 12,
		padding: 12,
		borderRadius: 16,
		backgroundColor: "#161829",
		gap: 10,
	},
	userRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	avatar: {
		width: 34,
		height: 34,
		borderRadius: 17,
	},
	username: {
		fontSize: 14,
		fontWeight: "700",
		color: "#ffffff",
	},
	title: {
		marginTop: 18,
		marginBottom: 12,
		fontSize: 18,
		fontWeight: "800",
		color: "#ffffff",
	},
	gridImage: {
		width: "32%",
		aspectRatio: 1,
		margin: "0.66%",
		borderRadius: 6,
		backgroundColor: "#161829",
	},
})

export default SearchView
