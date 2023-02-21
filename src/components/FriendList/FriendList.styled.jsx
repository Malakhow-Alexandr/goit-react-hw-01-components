import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
  margin-bottom: 60px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  width: 350px;
  border-radius: 7px;
  padding: 20px;
  background-color: ${props => `${props.theme.colorsFriends.white}`};
  box-shadow: ${props => `${props.theme.colorsFriends.shadow}`};

  img {
    width: 70px;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 7px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.active) {
      return `${props.theme.colorsFriends.green}`;
    }
    return `${props.theme.colorsFriends.orangeRed}`;
  }};
`;

export const FriendName = styled.p`
  font-size: 25px;
  font-weight: 600;
`;
