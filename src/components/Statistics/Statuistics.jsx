import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ Good, Neutral, Bad, Total, feedback }) => {
  if (Total) {
    return (
      <section>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {Total}</p>
        <p>Positive feedback: {feedback}%</p>
      </section>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;