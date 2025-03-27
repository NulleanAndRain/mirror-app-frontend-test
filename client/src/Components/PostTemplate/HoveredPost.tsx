import "react";
import { PostProps } from "./Post";
import {
  PostAuthorDateBlockHovered,
  PostAutor,
  PostCommentsLikesBlockHovered,
  PostContainer,
  PostContentHovered,
  PostDate,
  PostFooterHovered,
  PostFooterItem,
} from "./PostStyles";
import {
  getPostCommentsLocalString,
  getPostLikesLocalString,
  getPostTimeLocalString,
} from "../../Utils/PostUtils";

export const HoveredPost = ({
  caption,
  comments,
  date,
  likes,
  userName,
}: PostProps) => {
  return (
    <PostContainer>
      <PostContentHovered>{caption}</PostContentHovered>
      <PostFooterHovered>
        <PostAuthorDateBlockHovered>
          <PostAutor>{userName}</PostAutor>
          <PostDate>{getPostTimeLocalString(date)}</PostDate>
        </PostAuthorDateBlockHovered>
        <PostCommentsLikesBlockHovered>
          <PostFooterItem>{getPostLikesLocalString(likes)}</PostFooterItem>
          <PostFooterItem>
            {getPostCommentsLocalString(comments)}
          </PostFooterItem>
        </PostCommentsLikesBlockHovered>
      </PostFooterHovered>
    </PostContainer>
  );
};
