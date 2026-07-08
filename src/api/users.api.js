import { currentUser, fakeUsers } from "../data/userData"

export function getCurrentUser() {
	return currentUser
}

export function searchUsers(text = "") {
	const normalizedText = text.toLowerCase().trim()

	if (normalizedText.length == 0) {
		return fakeUsers
	}

	return fakeUsers.filter((user) => user.username.toLowerCase().includes(normalizedText))
}
