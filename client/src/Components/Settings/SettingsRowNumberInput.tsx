import "react";
import { SettingKey, SettingsRowStyle, SettingValue } from "./SettingsStyles";
import { ChangeEvent } from "react";

interface SettingsRowParams {
  title: string;
  currentValue: number;
  minValue: number;
  maxValue?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SettingsRowNumberInput = ({
  title,
  currentValue,
  minValue,
  onChange,
  maxValue = 16,
}: SettingsRowParams) => {
  return (
    <SettingsRowStyle>
      <SettingKey>{title}</SettingKey>
      <SettingValue>
        <input
          type="number"
          value={currentValue}
          min={minValue}
          onChange={(e) => onChange(e)}
          max={maxValue}
        />
      </SettingValue>
    </SettingsRowStyle>
  );
};
