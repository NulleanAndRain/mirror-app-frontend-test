import "react";
import { GridLayoutContainer, GridPostWrapper } from "./LayoutStyles";
import { LayoutProps } from "./LayoutProvider";
import { useSelector } from "react-redux";
import { selectCurrentColums } from "../../Store/settingsSlice";
import { Post } from "../PostTemplate/Post";

export const GridLayout = ({ displayingPosts }: LayoutProps) => {
  const columns = useSelector(selectCurrentColums);
  return (
    <GridLayoutContainer $columns={columns}>
      {displayingPosts.map((postData) => (
        <GridPostWrapper key={postData.id}>
          <Post
            caption={postData.caption}
            comments={postData.comments}
            date={postData.date}
            likes={postData.likes}
            userName={postData.userName}
          />
        </GridPostWrapper>
      ))}
    </GridLayoutContainer>
  );
};
