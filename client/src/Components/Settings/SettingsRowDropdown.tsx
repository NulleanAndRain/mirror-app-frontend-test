import "react";
import { SettingKey, SettingsRowStyle, SettingValue } from "./SettingsStyles";
import Dropdown, { Option } from "react-dropdown";

interface SettingsRowParams {
  title: string;
  currentValue: string;
  allValues: Array<string>;
  localizationMapper: (value: string) => string;
  onChange: (arg: Option) => void;
}

export const SettingsRowDropdown = ({
  title,
  currentValue,
  allValues,
  localizationMapper,
  onChange,
}: SettingsRowParams) => {
  return (
    <SettingsRowStyle>
      <SettingKey>{title}</SettingKey>
      <SettingValue>
        <Dropdown
          options={allValues.map((x) => {
            return { label: localizationMapper(x), value: x };
          })}
          value={currentValue}
          onChange={onChange}
        />
      </SettingValue>
    </SettingsRowStyle>
  );
};
