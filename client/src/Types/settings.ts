export type Layout = "grid" | "masonry";
export type LayoutElement = "columns" | "rows";
export type Template = "classic" | "hover";
export type Navigation = "load-more" | "pagination";

type LayoutConfig = Record<LayoutElement, number>;
type LayoutParams = Record<Layout, LayoutConfig>;
type LayoutParamsPartial = Partial<Record<Layout, LayoutConfig>>;

export interface Settings {
  layout: {
    current: Layout;
    params: LayoutParams;
  };
  template: Template;
  navigation: Navigation;
}


export interface SettingsUpdateModel {
  layout?: {
    current?: Layout;
    params?: LayoutParamsPartial;
  };
  template?: Template;
  navigation?: Navigation;
}