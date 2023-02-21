import PropTypes from 'prop-types';
import {
  Card,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistic = ({ stats, title }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </Card>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
