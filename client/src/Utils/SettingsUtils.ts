import { Layout } from "../Types/settings";

export const isLayoutHasColumns = (currentLayout: Layout) => {
  return currentLayout === 'grid' || currentLayout === 'masonry'
}

export const isLayoutHasRows = (currentLayout: Layout) => {
  return currentLayout === 'grid' || currentLayout === 'masonry'
}