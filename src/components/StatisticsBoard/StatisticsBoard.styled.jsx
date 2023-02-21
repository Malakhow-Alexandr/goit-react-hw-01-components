import styled from '@emotion/styled';

export const Board = styled.section`
  width: 440px;
  border-radius: 10px;
  margin-bottom: 60px;
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    `${props.theme.colorsProfile.profileBackground}`};
`;
