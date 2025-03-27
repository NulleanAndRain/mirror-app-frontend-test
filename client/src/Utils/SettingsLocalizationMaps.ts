import { Layout, Navigation, Template } from "../Types/settings";


export const mapLayoutName = (layout: Layout) => {
  switch (layout) {
    case 'grid': return 'Сетка';
    case 'masonry': return 'Плиточная верстка';
  }
}

export const mapNavigationName = (navigation: Navigation) => {
  switch (navigation) {
    case 'load-more': return 'Загрузить еще';
    case 'pagination': return 'Пагинация';
  }
}

export const mapTemplateName = (template: Template) => {
  switch (template) {
    case 'classic': return 'Классическая';
    case 'hover': return 'Наведения';
  }
}