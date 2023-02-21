import styled from '@emotion/styled';

export const Card = styled.section`
  width: 380px;
  background-color: white;
  box-shadow: ${props => `${props.theme.colorsStatistics.shadow}`};
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  display: block;
  padding: 30px 0px;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
  color: ${props => `${props.theme.colorsStatistics.grey}`};
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 76px;
  padding: 20px 0px;
  gap: 10px;
  outline: 1px solid gray;
  box-shadow: ${props => `${props.theme.colorsStatistics.shadow}`};

  &:nth-child(1) {
    background-color: ${props => `${props.theme.colorsStatistics.blue}`};
  }
  &:nth-child(2) {
    background-color: ${props => `${props.theme.colorsStatistics.green}`};
  }
  &:nth-child(3) {
    background-color: ${props => `${props.theme.colorsStatistics.violet}`};
  }
  &:nth-child(4) {
    background-color: ${props => `${props.theme.colorsStatistics.orangeRed}`};
  }
  &:nth-child(5) {
    background-color: ${props => `${props.theme.colorsStatistics.navy}`};
  }
`;

export const Label = styled.span`
  font-size: 19px;
  font-weight: 500;
  color: ${props => `${props.theme.colorsStatistics.white}`};
`;
export const Percentage = styled.span`
  font-size: 19px;
  font-weight: 500;
  color: ${props => `${props.theme.colorsStatistics.white}`};
`;
