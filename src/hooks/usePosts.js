import { useCallback, useEffect, useState } from "react"
import { getPosts } from "../api/posts.api"

export function usePosts(amount = 12) {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const loadPosts = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			const data = await getPosts(amount)
			setPosts(data)
		} catch (err) {
			setError("No se pudieron cargar las publicaciones.")
		} finally {
			setLoading(false)
		}
	}, [amount])

	useEffect(() => {
		loadPosts()
	}, [loadPosts])

	function toggleLike(postId) {
		setPosts((currentPosts) => currentPosts.map((post) => {
			if (post.id == postId) {
				return {
					...post,
					liked: !post.liked,
					likes: post.liked ? post.likes - 1 : post.likes + 1,
				}
			}

			return post
		}))
	}

	return {
		posts,
		loading,
		error,
		loadPosts,
		toggleLike,
	}
}
