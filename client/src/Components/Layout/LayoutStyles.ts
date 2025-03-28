import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 40px;
  font-family: 'Verdana';
`

export const GridLayoutContainer = styled.div<{ $columns: number }>`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  ${({$columns}) => 
    css`
      grid-template-columns: repeat(${$columns}, minmax(260px, 1fr));
    `
  }
`;

export const GridPostWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const MasonryLayoutContainer = styled.div<{ $columns: number }>`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  padding: 10px;
  ${({$columns}) => 
    css`
      grid-template-columns: repeat(${$columns}, minmax(260px, 1fr));
    `
  }
`;

export const MasonryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const MasonryPostWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: max-content;
`;

export const LoadMoreButton = styled.button`
  padding: 10px 40px;
  background-color: #d4faf5;
  border: #8e8e8e solid 1px;
  border-radius: 4px;
`

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PaginationCell = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationButton = styled.button`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4faf5;
  border: #8e8e8e solid 1px;
  border-radius: 4px;
`