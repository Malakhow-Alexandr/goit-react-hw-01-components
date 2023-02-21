import PropTypes from 'prop-types';
import { Statistic } from 'components/Statistics/Statistics';
import { Board } from './StatisticsBoard.styled';

export const StatisticsBoard = ({ data }) => {
  return (
    <Board>
      <Statistic stats={data} title="Upload stats"></Statistic>
    </Board>
  );
};

StatisticsBoard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
