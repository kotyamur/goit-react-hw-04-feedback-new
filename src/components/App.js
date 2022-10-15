import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const optionsValue = Object.values(this.state);
    return optionsValue.reduce((acc, value) => value + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFb = this.state.good;
    if (total === 0) {
      return 0;
    }
    const positiveFbPercentage = (goodFb / total) * 100;
    return positiveFbPercentage.toFixed();
  };

  render() {
    const options = Object.keys(this.state);
    const totalFb = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <Box p={5} display="flex" flexDirection="column" as="main">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFb > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFb}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
