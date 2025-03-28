import axios from "axios";
import { Settings } from "http2";
import { PostData, PostRaw, User } from "../Types/posts";

const apiUrl = "http://localhost:4000";
const settingsController = "/settings";
const postsController = "/posts";
const usersController = "/users";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const fetchSettings = async () => {
  const result = await axios
    .get(`${apiUrl}${settingsController}`)
    .then((response) => {
      return response.data as Settings;
    });
  return result;
};

export const fetchPosts = async () => {
  const result = await Promise.all([
    axios.get(`${apiUrl}${postsController}`).then((response) => {
      return Promise.resolve(response.data as Array<PostRaw>);
    }),
    axios.get(`${apiUrl}${usersController}`).then((response) => {
      return Promise.resolve(response.data as Array<User>);
    }),
  ]).then(async ([posts, users]) => {
    const postsData = await Promise.all(
      posts.map(async (post) => {
        const userName =
          users.find((u) => u.id === post.userId)?.username ??
          (await axios
            .get(`${apiUrl}${usersController}/${post.userId}`)
            .then((result) => (result.data as User).username));

        const postData: PostData = {
          ...post,
          userName: userName as string,
        };
        return Promise.resolve(postData);
      })
    ).then((posts) => {
      return posts;
    });
    return postsData;
  });
  return result;
};
