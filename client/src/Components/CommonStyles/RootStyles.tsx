import styled from "styled-components";

export const TopMenu = styled.menu`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
`;

export const SettingsButtonWrapper = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 0 0 0 32px;
  background-color: #e7e7e7;
  cursor: pointer;
  box-sizing: border-box;
`;

export const SettingsButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const controlBgColor = "#d4faf5";
export const controlBgColorHighlight = "#ebfaf8";

export const borderDefault = "#8e8e8e solid 1px";
