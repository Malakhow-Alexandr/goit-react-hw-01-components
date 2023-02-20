import user from '../user.json';
import { ProfileBoard } from './ProfileBoard/ProfileBord';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileBoard user={user}></ProfileBoard>
    </div>
  );
};
