import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => `${props.theme.colorsProfile.cardhadow}`};
  background-color: ${props => `${props.theme.colorsProfile.white}`};
`;

export const ProfileInfo = styled.div`
  text-align: center;
  padding: 30px;

  img {
    width: 130px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 7px;
  }
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => `${props.theme.colorsProfile.primaryText}`};
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${props => `${props.theme.colorsProfile.secondaryText}`};
`;

export const Location = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => `${props.theme.colorsProfile.secondaryText}`};
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
`;

export const StatsItem = styled.li`
  width: 117px;
  text-align: center;
  padding: 20px 0px;
  outline: 1px solid ${props => `${props.theme.colorsProfile.profileOutline}`};
  background-color: ${props =>
    `${props.theme.colorsProfile.profileListBgcolor}`};
`;

export const Label = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
  color: ${props => `${props.theme.colorsProfile.secondaryText}`};
`;

export const Quantity = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
