import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const Options = ({ options, handleIncrement }) => {
  return (
    <section>
      {options.map(option => (
        <button
          className={css.feedbackButton}
          key={option}
          name={option}
          type="button"
          onClick={handleIncrement}
        >
          {option}
        </button>
      ))}
    </section>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Options;