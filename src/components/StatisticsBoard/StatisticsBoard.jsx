import { Statistic } from 'components/Statistics/Statistics';

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
