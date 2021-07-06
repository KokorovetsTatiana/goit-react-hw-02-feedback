import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTitle;