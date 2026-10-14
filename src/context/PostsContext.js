import { createContext, useContext } from "react";
import { usePosts } from "../hooks/usePosts";

const PostsContext = createContext(null);

export function PostsProvider({ children }) {
    const postsState = usePosts(15);

    return (
        <PostsContext.Provider value={postsState}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePostsContext() {
    const context = useContext(PostsContext);

    if (context === null) {
        throw new Error(
            "usePostsContext debe utilizarse dentro de PostsProvider"
        );
    }

    return context;
}