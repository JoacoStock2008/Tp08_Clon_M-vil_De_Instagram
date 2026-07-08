import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import AppHeader from "../components/AppHeader"

function CreatePostView() {
	return (
		<View style={styles.screen}>
			<AppHeader title="New Post" showSearch={false} />
			<View style={styles.content}>
				<View style={styles.previewCard}>
					<Image
						source={{ uri: "https://cataas.com/cat?width=600&height=600&_=preview" }}
						style={styles.previewImage}
						resizeMode="cover"
					/>
					<Text style={styles.previewText}>Vista previa temporal</Text>
				</View>

				<TextInput
					style={styles.captionInput}
					placeholder="Escribí un caption..."
					placeholderTextColor="#6b6f82"
					multiline
				/>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Publicar</Text>
				</Pressable>

				<Text style={styles.note}>Pantalla visual. El backend original no incluye creación real de posts.</Text>
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
		width: "92%",
		alignSelf: "center",
		paddingTop: 18,
	},
	previewCard: {
		width: "100%",
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
	},
	previewImage: {
		width: "100%",
		height: 310,
	},
	previewText: {
		padding: 12,
		fontSize: 13,
		color: "#a0a3b1",
	},
	captionInput: {
		width: "100%",
		minHeight: 110,
		marginTop: 16,
		padding: 14,
		borderRadius: 16,
		backgroundColor: "#161829",
		borderWidth: 1,
		borderColor: "#252840",
		fontSize: 15,
		textAlignVertical: "top",
		color: "#ffffff",
	},
	button: {
		width: "100%",
		marginTop: 16,
		paddingVertical: 14,
		alignItems: "center",
		borderRadius: 16,
		backgroundColor: "#e1306c",
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "800",
		color: "#ffffff",
	},
	note: {
		marginTop: 14,
		fontSize: 13,
		lineHeight: 18,
		color: "#a0a3b1",
	},
})

export default CreatePostView
