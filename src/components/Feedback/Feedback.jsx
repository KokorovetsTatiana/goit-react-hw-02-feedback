import { Component } from 'react';

import Options from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from '../Section/SectionTitle';
import Sections from '../Statistics/Statuistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    } else return 0;
  };
  render() {
    console.log();
    return (
      <div>
        <SectionTitle title={'Please leave feedback'}>
          <Options
            options={Object.keys(this.state)}
            handleIncrement={this.handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title={'Statistics'} />
        <Sections
          Good={this.state.good}
          Neutral={this.state.neutral}
          Bad={this.state.bad}
          Total={this.countTotalFeedback()}
          feedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;