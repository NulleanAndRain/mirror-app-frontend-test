import "react";
import { NavigationProps } from "./NavigationProvider";
import { useSelector } from "react-redux";
import { selectPosts } from "../../Store/postsCacheSlice";
import { useCallback, useEffect, useState } from "react";

export const PaginationNavigation = ({
  setDisplayingPosts,
  postsPerPage,
}: NavigationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = useSelector(selectPosts);

  const displayingPostsCount = currentPage * postsPerPage;

  useEffect(() => {
    setDisplayingPosts(
      allPosts.slice(
        (currentPage - 1) * postsPerPage,
        Math.min(currentPage * postsPerPage, allPosts.length)
      )
    );
  }, [
    allPosts,
    currentPage,
    displayingPostsCount,
    postsPerPage,
    setDisplayingPosts,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [postsPerPage]);

  const pageCount = Math.ceil(allPosts.length / postsPerPage);

  const selectPageHandler = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    },
    [setCurrentPage]
  );

  return <></>;
};
