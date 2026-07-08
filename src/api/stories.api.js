import { apiGet } from "./client"
import { fakeUsers } from "../data/userData"

export async function getStories(amount = 7) {
	const images = await apiGet("/images/search", {
		limit: amount,
		mime_types: "jpg,png",
	})

	return images.map((image, index) => ({
		id: image.id,
		imageUrl: image.url,
		username: fakeUsers[index % fakeUsers.length].username,
	}))
}
