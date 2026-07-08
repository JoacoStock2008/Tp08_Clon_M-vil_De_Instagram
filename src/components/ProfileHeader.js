import { Pressable, StyleSheet, Text, View } from "react-native"
import Avatar from "./Avatar"
import { currentUser, formatCount } from "../data/userData"

function ProfileHeader() {
	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<Avatar source={currentUser.avatar} size={92} />
				<View style={styles.infoContainer}>
					<View style={styles.nameRow}>
						<Text style={styles.displayName}>{currentUser.displayName}</Text>
						{currentUser.verified && <Text style={styles.verified}>✓</Text>}
					</View>
					<Text style={styles.username}>{currentUser.username}</Text>
					<Text style={styles.bio}>{currentUser.bio}</Text>
				</View>
			</View>

			<View style={styles.statsRow}>
				<ProfileStat label="Posts" value={currentUser.posts} />
				<ProfileStat label="Followers" value={formatCount(currentUser.followers)} />
				<ProfileStat label="Following" value={currentUser.following} />
			</View>

			<View style={styles.buttonsRow}>
				<Pressable style={styles.primaryButton}><Text style={styles.primaryButtonText}>Editar perfil</Text></Pressable>
				<Pressable style={styles.secondaryButton}><Text style={styles.secondaryButtonText}>⚙️</Text></Pressable>
			</View>
		</View>
	)
}

function ProfileStat({ label, value }) {
	return (
		<View style={styles.stat}>
			<Text style={styles.statValue}>{value}</Text>
			<Text style={styles.statLabel}>{label}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingVertical: 18,
		borderBottomWidth: 1,
		borderBottomColor: "#252840",
	},
	topRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	infoContainer: {
		flex: 1,
	},
	nameRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	displayName: {
		fontSize: 23,
		fontWeight: "800",
		color: "#ffffff",
	},
	verified: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: "#3897f0",
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "900",
	},
	username: {
		marginTop: 4,
		fontSize: 14,
		color: "#a0a3b1",
	},
	bio: {
		marginTop: 8,
		fontSize: 13,
		lineHeight: 18,
		color: "#d8d9e3",
	},
	statsRow: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 22,
	},
	stat: {
		alignItems: "center",
	},
	statValue: {
		fontSize: 18,
		fontWeight: "800",
		color: "#ffffff",
	},
	statLabel: {
		fontSize: 12,
		color: "#a0a3b1",
	},
	buttonsRow: {
		flexDirection: "row",
		gap: 10,
		marginTop: 18,
	},
	primaryButton: {
		flex: 1,
		paddingVertical: 11,
		borderRadius: 12,
		backgroundColor: "#e1306c",
		alignItems: "center",
	},
	primaryButtonText: {
		fontSize: 14,
		fontWeight: "800",
		color: "#ffffff",
	},
	secondaryButton: {
		width: 46,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12,
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
	},
	secondaryButtonText: {
		fontSize: 17,
	},
})

export default ProfileHeader
