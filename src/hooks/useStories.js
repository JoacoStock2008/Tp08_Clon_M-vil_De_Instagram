import { useEffect, useState } from "react"
import { getStories } from "../api/stories.api"

export function useStories(amount = 7) {
	const [stories, setStories] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadStories() {
			try {
				const data = await getStories(amount)
				setStories(data)
			} catch (error) {
				setStories([])
			} finally {
				setLoading(false)
			}
		}

		loadStories()
	}, [amount])

	return {
		stories,
		loading,
	}
}
