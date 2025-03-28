import styled from "styled-components";
import {
  borderDefault,
  controlBgColor,
  controlBgColorHighlight,
} from "../CommonStyles/RootStyles";

export const SettingsModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(160, 160, 160, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const SettingsPanelStyled = styled.dialog`
  width: max-content;
  height: max-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: "Verdana";
  background-color: #fff;
  border-radius: 16px;
`;

export const SettingsHeader = styled.h2`
  padding: 0;
  margin: 20px 0 30px 0%;
  font-size: 30px;
  text-align: center;
  width: auto;
  height: auto;
  font-weight: 400;
`;

export const SettingsRowStyle = styled.div`
  width: 550px;
  height: 50px;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: ${borderDefault};
  border-radius: 8px;
`;

export const SettingKey = styled.span`
  font-weight: 400;
`;

export const SettingValue = styled.span`
  width: 200px;
  padding: 10px;
  height: 40px;
  border: ${borderDefault};
  border-radius: 4px;
  text-align: center;
  background-color: ${controlBgColor};
  box-sizing: border-box;

  .Dropdown-root {
    z-index: 250;
    position: relative;
  }
  .Dropdown-placeholder:hover {
    background-color: ${controlBgColorHighlight};
    cursor: pointer;
  }
  .settings__dropdown__menu {
    background-color: ${controlBgColor};
    width: 200px;
    box-sizing: border-box;
    margin-left: -10.5px;
    border: ${borderDefault};
    border-radius: 0 0 4px 4px;
    border-top: none;
    padding-top: 4px;
    cursor: pointer;

    div[role="option"] {
      cursor: pointer;
      &:hover {
        background-color: ${controlBgColorHighlight};
      }
    }
  }

  input[type="number"] {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    &:hover,
    &:focus {
      background-color: ${controlBgColorHighlight};
      border: none;
    }
    &:focus {
      outline: ${borderDefault};
    }
  }
`;

export const SettingsSaveButton = styled.button`
  background-color: ${controlBgColor};
  border: ${borderDefault};
  border-radius: 4px;
  padding: 10px;
`;
