import { Statistic } from 'components/Statistics/Statistics';
import { Board } from './StatisticsBoard.styled';

export const StatisticsBoard = ({ data }) => {
  return (
    <Board>
      <Statistic
        key={data.id}
        label={data.label}
        percentage={data.percentage}
      ></Statistic>
    </Board>
  );
};
