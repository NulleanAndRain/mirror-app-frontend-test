import "react";
import { PostData } from "../../Types/posts";
import { PageContainer } from "./LayoutStyles";
import { LayoutProvider } from "./LayoutProvider";
import { useSelector } from "react-redux";
import {
  selectCurrentColums,
  selectCurrentRows,
  selectNavigation,
} from "../../Store/settingsSlice";
import { NavigationProvider } from "./NavigationProvider";
import { useEffect, useState } from "react";

export const PageContent = () => {
  const columns = useSelector(selectCurrentColums);
  const rows = useSelector(selectCurrentRows);

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
