import user from '../user.json';
import data from '../data.json';
import { ProfileBoard } from './ProfileBoard/ProfileBord';
import { StatisticsBoard } from './StatisticsBoard/StatisticsBoard';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileBoard user={user}></ProfileBoard>
      <StatisticsBoard data={data}></StatisticsBoard>
    </div>
  );
};
