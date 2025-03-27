import { useSelector } from "react-redux"
import { selectTemplate } from "../Store/settingsSlice"
import { ClassicPost } from "../Components/PostTemplate/ClassicPost";
import { HoveredPost } from "../Components/PostTemplate/HoveredPost";

export const usePostTemplate = () => {
  const template = useSelector(selectTemplate);
  switch (template) {
    case 'classic': return ClassicPost;
    case 'hover': return HoveredPost;
  }
}