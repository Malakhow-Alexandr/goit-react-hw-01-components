import PropTypes from 'prop-types';
import { ListCard, FriendName, Status } from './FriendListItem.styled';

export const ListItem = ({ isOnline, name, avatar }) => {
  return (
    <ListCard>
      <Status active={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListCard>
  );
};

ListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
