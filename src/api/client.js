const BASE_URL = "https://api.thecatapi.com/v1"

export async function apiGet(path, params = {}) {
	const query = new URLSearchParams(params).toString()
	const url = `${BASE_URL}${path}${query ? `?${query}` : ""}`
	const response = await fetch(url)

	if (response.ok == false) {
		throw new Error(`API request failed with status ${response.status}`)
	}

	return await response.json()
}
