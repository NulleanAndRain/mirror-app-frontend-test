import styled from "styled-components";

export const SettingsModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(160, 160, 160, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const SettingsPanelStyled = styled.div`
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
  border: #8e8e8e solid 1px;
  border-radius: 8px;
`;

export const SettingKey = styled.span`
  font-weight: 400;
`;

export const SettingValue = styled.span`
  width: auto;
  padding: 10px;
  height: 20px;
  border: #8e8e8e solid 1px;
  border-radius: 4px;
  text-align: center;
  background-color: #cffff9;
`;

export const SettingsSaveButton = styled.button`
  background-color: #d4faf5;
  border: #8e8e8e solid 1px;
  border-radius: 4px;
  padding: 10px;
`;
