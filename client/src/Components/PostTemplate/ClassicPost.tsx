import "react";
import {
  PostAutor,
  PostContainer,
  PostContentClassic,
  PostDate,
  PostFooterClassic,
  PostFooterItem,
  PostHeaderClassic,
} from "./PostStyles";
import {
  getPostCommentsLocalString,
  getPostLikesLocalString,
  getPostTimeLocalString,
} from "../../Utils/PostUtils";
import { PostProps } from "./Post";

export const ClassicPost = ({
  caption,
  comments,
  date,
  likes,
  userName,
}: PostProps) => {
  return (
    <PostContainer>
      <PostHeaderClassic>
        <PostAutor>{userName}</PostAutor>
        <PostDate>{getPostTimeLocalString(date)}</PostDate>
      </PostHeaderClassic>
      <PostContentClassic>{caption}</PostContentClassic>
      <PostFooterClassic>
        <PostFooterItem>{getPostLikesLocalString(likes)}</PostFooterItem>
        <PostFooterItem>{getPostCommentsLocalString(comments)}</PostFooterItem>
      </PostFooterClassic>
    </PostContainer>
  );
};
