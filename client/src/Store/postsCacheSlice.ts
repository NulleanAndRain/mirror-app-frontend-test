import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostData } from "../Types/posts"

type PostsCache = { posts: Array<PostData> }
export type PostsCacheSlice = { postsCache: PostsCache };

const initState = [] as Array<PostData>;

const postsCacheSlice = createSlice({
  name: 'postsCache',
  initialState: {posts: initState},
  reducers: {
    setPosts(state: PostsCache, action: PayloadAction<Array<PostData>>){
      state.posts = action.payload;
    }
  }
});

export default postsCacheSlice.reducer;

export const { setPosts } = postsCacheSlice.actions;
export const selectPosts = (state: PostsCacheSlice) => state.postsCache.posts;