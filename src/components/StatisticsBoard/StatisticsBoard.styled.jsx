import styled from '@emotion/styled';

export const Board = styled.section`
  width: 500px;
  height: 450px;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    `${props.theme.colorsProfile.profileBackground}`};
`;
