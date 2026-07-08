import { apiGet } from "./client"
import { fakeCaptions, fakeUsers } from "../data/userData"

export async function getPosts(amount = 12) {
	const images = await apiGet("/images/search", {
		limit: amount,
		mime_types: "jpg,png",
	})

	return images.map((image, index) => {
		const user = fakeUsers[index % fakeUsers.length]
		const caption = fakeCaptions[index % fakeCaptions.length]
		const likes = Math.floor(Math.random() * 49900) + 100
		const daysAgo = Math.floor(Math.random() * 30) + 1
		const date = new Date()
		date.setDate(date.getDate() - daysAgo)

		return {
			id: image.id,
			imageUrl: image.url,
			width: image.width,
			height: image.height,
			username: user.username,
			avatar: user.avatar,
			likes: likes,
			caption: caption,
			date: date.toLocaleDateString("es-AR", {
				day: "numeric",
				month: "long",
			}),
			liked: false,
		}
	})
}
