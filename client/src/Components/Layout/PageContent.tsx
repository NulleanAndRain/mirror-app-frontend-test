import "react";
import { PostData } from "../../Types/posts";
import { PageContainer } from "./LayoutStyles";
import { LayoutProvider } from "./LayoutProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentColums,
  selectCurrentRows,
  selectNavigation,
} from "../../Store/settingsSlice";
import { NavigationProvider } from "./NavigationProvider";
import { useEffect, useState } from "react";
import { setPosts } from "../../Store/postsCacheSlice";

const postJson = `{
    "caption": "Desolo temeritas velut temperantia conscendo commodo commemoro non officia admoneo.",
    "id": "f6e10d9f-0ef5-400b-b6b1-2da049d1da71",
    "date": "2025-03-04T00:23:10.793Z",
    "comments": 54,
    "likes": 823,
    "permalink": "https://reckless-mozzarella.com/",
    "userId": "88873bc3-b1bd-40c8-b897-baffbad54d20",
    "userName": "Oleg"
  }`;
const postData = JSON.parse(postJson) as PostData;
const postsCollection = Array.from({ length: 100 }, () => {
  return {
    ...postData,
    id: Math.random().toString(),
    caption:
      (Math.random() * 200) % 2 <= 1
        ? postData.caption
        : `${postData.caption} ${postData.caption}`,
  } as PostData;
});

export const PageContent = () => {
  const columns = useSelector(selectCurrentColums);
  const rows = useSelector(selectCurrentRows);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPosts(postsCollection));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsCollection]);

  const [displayingPosts, setDisplayingPosts] = useState([] as Array<PostData>);
  const postsPerPage = columns * rows;

  const navigation = useSelector(selectNavigation);
  useEffect(() => {
    setDisplayingPosts([]);
  }, [navigation]);

  return (
    <PageContainer>
      <LayoutProvider displayingPosts={displayingPosts} />
      <NavigationProvider
        setDisplayingPosts={setDisplayingPosts}
        postsPerPage={postsPerPage}
      />
    </PageContainer>
  );
};
