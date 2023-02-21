import styled from '@emotion/styled';

export const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 440px;
  border-radius: 10px;
  margin-bottom: 60px;
  padding: 50px 0px;
  background-color: ${props =>
    `${props.theme.colorsProfile.profileBackground}`};
`;
