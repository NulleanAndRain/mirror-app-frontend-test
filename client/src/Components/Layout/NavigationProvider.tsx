import "react";
import { useNavigation } from "../../Hooks/LayoutHooks";
import { PostData } from "../../Types/posts";

export interface NavigationProps {
  setDisplayingPosts: (displayingPosts: Array<PostData>) => void;
  postsPerPage: number;
}
export const NavigationProvider = ({
  setDisplayingPosts,
  postsPerPage,
}: NavigationProps) => {
  const Navigator = useNavigation();
  return (
    <Navigator
      setDisplayingPosts={setDisplayingPosts}
      postsPerPage={postsPerPage}
    />
  );
};
