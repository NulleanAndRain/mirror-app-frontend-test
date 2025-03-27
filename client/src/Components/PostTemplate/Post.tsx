import "react";
import { PostData } from "../../Types/posts";
import { usePostTemplate } from "../../Hooks/PostHooks";

export type PostProps = Omit<PostData, "id">;
export const Post = ({
  caption,
  comments,
  date,
  likes,
  userName,
}: PostProps) => {
  const PostTemplate = usePostTemplate();
  return (
    <PostTemplate
      caption={caption}
      comments={comments}
      date={date}
      likes={likes}
      userName={userName}
    />
  );
};
