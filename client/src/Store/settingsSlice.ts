import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Layout, Navigation, Settings, Template } from '../Types/settings';
import { isLayoutHasColumns, isLayoutHasRows } from '../Utils/SettingsUtils';

type SettingsSlice = {settings: Settings};

const initState : Settings = {
  layout: {
    current: 'grid',
    params: { 
      grid: { columns: 2, rows: 10 },
      masonry: {columns: 4, rows: 5}
    },
  },
  navigation: 'load-more',
  template: 'classic',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    changeLayout(state: Settings, action: PayloadAction<Layout>) {
      state.layout.current =  action.payload;
    },
    changeNavigation(state: Settings, action: PayloadAction<Navigation>) {
      state.navigation =  action.payload;
    },
    changeTemplate(state: Settings, action: PayloadAction<Template>) {
      state.template =  action.payload;
    },
    changeColums(state: Settings, action: PayloadAction<number>){
      if (isLayoutHasColumns(state.layout.current)) {
        if (!Number.isInteger(action.payload)) throw new Error('Число должно быть целым');
        state.layout.params[state.layout.current].columns = action.payload;
      }
      else
      return;
    },
    changeRows(state: Settings, action: PayloadAction<number>){
      if (isLayoutHasRows(state.layout.current)) {
        if (!Number.isInteger(action.payload)) throw new Error('Число должно быть целым');
        state.layout.params[state.layout.current].rows = action.payload;
      }
      else
      return;
    },
  }
});


export const { changeLayout, changeNavigation, changeTemplate } = settingsSlice.actions
export default settingsSlice.reducer

export const selectLayout = (state : SettingsSlice) => state.settings.layout.current;
export const selectNavigation = (state : SettingsSlice) => state.settings.navigation;
export const selectTemplate = (state : SettingsSlice) => state.settings.template;
export const selectCurrentColums = (state : SettingsSlice) => state.settings.layout.params[state.settings.layout.current].columns
export const selectCurrentRows = (state : SettingsSlice) => state.settings.layout.params[state.settings.layout.current].rows