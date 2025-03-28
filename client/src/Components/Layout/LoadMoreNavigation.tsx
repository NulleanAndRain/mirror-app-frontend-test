import "react";
import { NavigationProps } from "./NavigationProvider";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../Store/postsCacheSlice";
import { LoadMoreButton } from "./LayoutStyles";

export const LoadMoreNavigation = ({
  setDisplayingPosts,
  postsPerPage,
}: NavigationProps) => {
  const [currentPagesCount, setCurrentPagesCount] = useState(1);

  const allPosts = useSelector(selectPosts);

  const displayingPostsCount = currentPagesCount * postsPerPage;
  const canLoadMore = allPosts.length > displayingPostsCount;

  useEffect(() => {
    setDisplayingPosts(
      allPosts.slice(0, Math.min(displayingPostsCount, allPosts.length - 1))
    );
  }, [allPosts, currentPagesCount, displayingPostsCount, setDisplayingPosts]);

  useEffect(() => {
    setCurrentPagesCount(1);
  }, [postsPerPage]);

  const buttonClickHandler = useCallback(() => {
    setCurrentPagesCount(currentPagesCount + 1);
  }, [currentPagesCount]);

  return (
    <LoadMoreButton
      onClick={(e) => {
        e.preventDefault();
        buttonClickHandler();
      }}
      disabled={!canLoadMore}
    >
      Загрузить еще
    </LoadMoreButton>
  );
};
