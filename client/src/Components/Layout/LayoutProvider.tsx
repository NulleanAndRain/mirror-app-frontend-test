import "react";
import { useLayoutProvider } from "../../Hooks/LayoutHooks";
import { PostData } from "../../Types/posts";

export interface LayoutProps {
  displayingPosts: Array<PostData>;
}
export const LayoutProvider = ({ displayingPosts }: LayoutProps) => {
  const Layout = useLayoutProvider();
  return <Layout displayingPosts={displayingPosts}></Layout>;
};
