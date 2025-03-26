import "react";
import { useSelector } from "react-redux";
import {
  selectCurrentColums,
  selectCurrentRows,
  selectLayout,
  selectNavigation,
  selectTemplate,
} from "../../Store/settingsSlice";
import {
  SettingKey,
  SettingsHeader,
  SettingsPanelStyled,
  SettingsRow,
  SettingValue,
} from "./SettingsStyles";
import {
  mapLayoutName,
  mapNavigationName,
  mapTemplateName,
} from "../../Utils/SettingsLocalizationMaps";
import { isLayoutHasColumns, isLayoutHasRows } from "../../Utils/SettingsUtils";

export const SettingsPanel = () => {
  const layoutType = useSelector(selectLayout);
  const navigationType = useSelector(selectNavigation);
  const templateType = useSelector(selectTemplate);
  const columsCount = useSelector(selectCurrentColums);
  const rowsCount = useSelector(selectCurrentRows);

  const hasColumns = isLayoutHasColumns(layoutType);
  const hasRows = isLayoutHasRows(layoutType);

  return (
    <SettingsPanelStyled>
      <SettingsHeader>Настройки</SettingsHeader>
      <SettingsRow>
        <SettingKey>Шаблон:</SettingKey>
        <SettingValue>{mapLayoutName(layoutType)}</SettingValue>
      </SettingsRow>
      <SettingsRow>
        <SettingKey>Тип карточки:</SettingKey>
        <SettingValue>{mapTemplateName(templateType)}</SettingValue>
      </SettingsRow>
      <SettingsRow>
        <SettingKey>Навигация:</SettingKey>
        <SettingValue>{mapNavigationName(navigationType)}</SettingValue>
      </SettingsRow>
      {hasColumns && (
        <SettingsRow>
          <SettingKey>Число колонок:</SettingKey>
          <SettingValue>{columsCount}</SettingValue>
        </SettingsRow>
      )}
      {hasRows && (
        <SettingsRow>
          <SettingKey>Число строк:</SettingKey>
          <SettingValue>{rowsCount}</SettingValue>
        </SettingsRow>
      )}
    </SettingsPanelStyled>
  );
};
