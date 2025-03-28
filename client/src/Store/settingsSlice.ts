import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Layout, Settings, SettingsUpdateModel, } from '../Types/settings';

export type SettingsSlice = {settings: Settings};

export const settingsStorageKey = 'settings';

const initState : Settings = {
  layout: {
    current: 'grid',
    params: { 
      grid: { columns: 2, rows: 10 },
      masonry: { columns: 4, rows: 5 }
    },
  },
  navigation: 'load-more',
  template: 'classic',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    bulkUpdateSettings(state: Settings, action: PayloadAction<SettingsUpdateModel>){
      const model = action.payload;
      if (model.layout?.current)
        state.layout.current = model.layout.current;

      const currentLayout = model.layout?.current ?? state.layout.current;
      if (model.layout?.params && model.layout.params[currentLayout]) {
        state.layout.params[currentLayout] = model.layout.params[currentLayout];
      };

      if (model.navigation)
        state.navigation = model.navigation;

      if (model.template)
        state.template = model.template;

      sessionStorage.setItem(settingsStorageKey, JSON.stringify(state));
    },
  }
});


export const { bulkUpdateSettings } = settingsSlice.actions
export default settingsSlice.reducer

export const selectLayout = (state : SettingsSlice) => state.settings.layout.current;
export const selectNavigation = (state : SettingsSlice) => state.settings.navigation;
export const selectTemplate = (state : SettingsSlice) => state.settings.template;
export const selectCurrentColums = (state : SettingsSlice, currentLayout?: Layout) => 
  state.settings.layout.params[currentLayout ?? state.settings.layout.current].columns ?? 1;
export const selectCurrentRows = (state : SettingsSlice, currentLayout?: Layout) => 
  state.settings.layout.params[currentLayout ?? state.settings.layout.current].rows ?? 1;