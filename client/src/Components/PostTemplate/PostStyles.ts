import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #2b2b2b;
  color: #ffffff;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

export const PostHeaderClassic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-bottom: 1px solid #d6d6d6;
`;

export const PostAutor = styled.span`
  font-size: 20px;
`;

export const PostDate = styled.span`
  font-size: 14px;
  color: #979797;
`;

export const PostContentClassic = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: lighter;
  height: 100%;
`;

export const PostFooterClassic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-top: 1px solid #d6d6d6;
`;

export const PostFooterItem = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

export const PostFooterHovered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-top: 1px solid #d6d6d6;
`

export const PostAuthorDateBlockHovered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  box-sizing: border-box;
`

export const PostCommentsLikesBlockHovered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`

export const PostContentHovered = styled(PostContentClassic)`
  padding: 20px;
  font-size: 20px;
`