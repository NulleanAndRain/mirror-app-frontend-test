import "react";
import {
  MasonryColumn,
  MasonryLayoutContainer,
  MasonryPostWrapper,
} from "./LayoutStyles";
import { LayoutProps } from "./LayoutProvider";
import { useSelector } from "react-redux";
import { selectCurrentColums } from "../../Store/settingsSlice";
import { Post } from "../PostTemplate/Post";
import { splitArrayForMasonryGrid } from "../../Utils/GridUtils";
import { PostData } from "../../Types/posts";

export const MasonryLayout = ({ displayingPosts }: LayoutProps) => {
  const columns = useSelector(selectCurrentColums);

  const columnsData = splitArrayForMasonryGrid(
    displayingPosts,
    columns
  ) as Array<Array<PostData>>;

  return (
    <MasonryLayoutContainer $columns={columns}>
      {columnsData.map((col, i) => (
        <MasonryColumn key={i}>
          {col.map((postData) => (
            <MasonryPostWrapper key={postData.id}>
              <Post
                caption={postData.caption}
                comments={postData.comments}
                date={postData.date}
                likes={postData.likes}
                userName={postData.userName}
              />
            </MasonryPostWrapper>
          ))}
        </MasonryColumn>
      ))}
    </MasonryLayoutContainer>
  );
};
