import { useSelector } from "react-redux";
import { selectLayout, selectNavigation } from "../Store/settingsSlice";
import { GridLayout } from "../Components/Layout/GridLayout";
import { MasonryLayout } from "../Components/Layout/MasonryLayout";
import { LoadMoreNavigation } from "../Components/Layout/LoadMoreNavigation";
import { PaginationNavigation } from "../Components/Layout/PaginationNavigation";

export const useLayoutProvider = () => {
  const layout = useSelector(selectLayout);
  switch (layout) {
    case 'grid': return GridLayout;
    case 'masonry': return MasonryLayout;
  }
}

export const useNavigation = () => {
  const layout = useSelector(selectNavigation);
  switch (layout) {
    case 'load-more': return LoadMoreNavigation;
    case 'pagination': return PaginationNavigation;
  }
}