import "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bulkUpdateSettings,
  selectCurrentColums,
  selectCurrentRows,
  selectLayout,
  selectNavigation,
  selectTemplate,
  SettingsSlice,
} from "../../Store/settingsSlice";
import {
  SettingsHeader,
  SettingsPanelStyled,
  SettingsSaveButton,
} from "./SettingsStyles";
import {
  mapLayoutName,
  mapNavigationName,
  mapTemplateName,
} from "../../Utils/SettingsLocalizationMaps";
import { isLayoutHasColumns, isLayoutHasRows } from "../../Utils/SettingsUtils";
import { SettingsRowDropdown } from "./SettingsRowDropdown";
import {
  LayoutTypes,
  NavigationTypes,
  TemplateTypes,
} from "../Enums/SettingsEnums";
import {
  Layout,
  Navigation,
  SettingsUpdateModel,
  Template,
} from "../../Types/settings";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Option } from "react-dropdown";
import { SettingsRowNumberInput } from "./SettingsRowNumberInput";

export interface SettingsPanelProps {
  saveCallback?: () => void;
}
export const SettingsPanel = ({ saveCallback }: SettingsPanelProps) => {
  const dispatch = useDispatch();
  const layoutInitialState = useSelector(selectLayout);
  const templateInitialState = useSelector(selectTemplate);
  const navigationInitialState = useSelector(selectNavigation);

  const [layoutType, setLayoutType] = useState({
    value: layoutInitialState,
    changed: false,
  });
  const [templateType, setTemplateType] = useState({
    value: templateInitialState,
    changed: false,
  });
  const [navigationType, setNavigationType] = useState({
    value: navigationInitialState,
    changed: false,
  });

  const columsCountInitial = useSelector((state) =>
    selectCurrentColums(state as SettingsSlice, layoutType.value)
  );
  const rowsCountInitial = useSelector((state) =>
    selectCurrentRows(state as SettingsSlice, layoutType.value)
  );

  const [columnsCount, setColumsCount] = useState({
    value: columsCountInitial,
    changed: false,
  });
  const [rowsCount, setRowsCount] = useState({
    value: rowsCountInitial,
    changed: false,
  });

  const hasColumns = isLayoutHasColumns(layoutType.value);
  const hasRows = isLayoutHasRows(layoutType.value);

  const allLayouts = LayoutTypes;
  const allTemplates = TemplateTypes;
  const allNavigations = NavigationTypes;

  const layoutChangeHandler = (selectedOption: Option) => {
    setLayoutType({
      value: selectedOption.value as Layout,
      changed: selectedOption.value !== layoutInitialState,
    });
  };
  const templateChangeHandler = (selectedOption: Option) => {
    setTemplateType({
      value: selectedOption.value as Template,
      changed: selectedOption.value !== templateInitialState,
    });
  };
  const navigationChangeHandler = (selectedOption: Option) => {
    setNavigationType({
      value: selectedOption.value as Navigation,
      changed: selectedOption.value !== layoutInitialState,
    });
  };

  const columnsCountChangeHandler = (e: ChangeEvent) => {
    const value = (e.nativeEvent.target as HTMLInputElement)?.value;
    setColumsCount({
      value: Number.parseInt(value ?? "1"),
      changed: true,
    });
  };
  const rowsCountChangeHandler = (e: ChangeEvent) => {
    const value = (e.nativeEvent.target as HTMLInputElement)?.value;
    setRowsCount({
      value: Number.parseInt(value ?? "1"),
      changed: true,
    });
  };

  useEffect(() => {
    setColumsCount({
      value: columsCountInitial,
      changed: false,
    });
    setRowsCount({
      value: rowsCountInitial,
      changed: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutType.value]);

  const saveHandler = useCallback(() => {
    const changeModel: SettingsUpdateModel = {};

    if (layoutType.changed || rowsCount.changed || columnsCount.changed) {
      changeModel.layout = {};
      if (layoutType.changed) changeModel.layout.current = layoutType.value;
      if (rowsCount.changed || columnsCount.changed) {
        changeModel.layout.params = {};
        changeModel.layout.params[layoutType.value] = {
          columns: columnsCount.value,
          rows: rowsCount.value,
        };
      }
    }

    if (templateType.changed) changeModel.template = templateType.value;
    if (navigationType.changed) changeModel.navigation = navigationType.value;

    dispatch(bulkUpdateSettings(changeModel));

    saveCallback?.();
  }, [
    layoutType,
    navigationType,
    templateType,
    rowsCount,
    columnsCount,
    dispatch,
    saveCallback,
  ]);

  return (
    <SettingsPanelStyled onClick={(e) => e.stopPropagation()}>
      <SettingsHeader>Настройки</SettingsHeader>
      <SettingsRowDropdown
        allValues={allLayouts}
        title="Шаблон:"
        currentValue={layoutType.value}
        localizationMapper={(val: string) => mapLayoutName(val as Layout)}
        onChange={layoutChangeHandler}
      />
      <SettingsRowDropdown
        allValues={allTemplates}
        title="Тип карточки:"
        currentValue={templateType.value}
        localizationMapper={(val: string) => mapTemplateName(val as Template)}
        onChange={templateChangeHandler}
      />
      <SettingsRowDropdown
        allValues={allNavigations}
        title="Навигация:"
        currentValue={navigationType.value}
        localizationMapper={(val: string) =>
          mapNavigationName(val as Navigation)
        }
        onChange={navigationChangeHandler}
      />
      {hasColumns && (
        <SettingsRowNumberInput
          currentValue={columnsCount.value}
          title="Число колонок:"
          minValue={1}
          maxValue={8}
          onChange={columnsCountChangeHandler}
        />
      )}
      {hasRows && (
        <SettingsRowNumberInput
          currentValue={rowsCount.value}
          title="Число строк:"
          minValue={1}
          maxValue={16}
          onChange={rowsCountChangeHandler}
        />
      )}
      <SettingsSaveButton
        onClick={(e) => {
          e.preventDefault();
          saveHandler();
        }}
      >
        Сохранить
      </SettingsSaveButton>
    </SettingsPanelStyled>
  );
};
