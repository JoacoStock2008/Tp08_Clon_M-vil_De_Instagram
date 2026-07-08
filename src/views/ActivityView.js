import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import AppHeader from "../components/AppHeader"
import { fakeUsers } from "../data/userData"

const activities = fakeUsers.map((user, index) => ({
	id: user.username,
	user: user.username,
	avatar: user.avatar,
	text: index % 2 == 0 ? "le dio like a tu publicación." : "empezó a seguirte.",
	time: `${index + 1} h`,
}))

function ActivityView() {
	return (
		<View style={styles.screen}>
			<AppHeader title="Activity" showSearch={false} />
			<FlatList
				data={activities}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.content}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image source={{ uri: item.avatar }} style={styles.avatar} />
						<View style={styles.textContainer}>
							<Text style={styles.activityText}><Text style={styles.bold}>{item.user}</Text> {item.text}</Text>
							<Text style={styles.time}>{item.time}</Text>
						</View>
					</View>
				)}
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
		paddingVertical: 16,
		gap: 10,
	},
	card: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		padding: 12,
		borderRadius: 16,
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
		gap: 12,
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},
	textContainer: {
		flex: 1,
	},
	activityText: {
		fontSize: 14,
		lineHeight: 20,
		color: "#d8d9e3",
	},
	bold: {
		fontWeight: "800",
		color: "#ffffff",
	},
	time: {
		marginTop: 2,
		fontSize: 12,
		color: "#6b6f82",
	},
})

export default ActivityView
