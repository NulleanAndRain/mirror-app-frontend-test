import styled from "styled-components";

export const SettingsPanelStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: "Verdana";
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

export const SettingsRow = styled.div`
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
