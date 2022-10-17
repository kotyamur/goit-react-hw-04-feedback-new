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

  countFeedbackPercentage = (amount, total) =>
    Math.round(total ? (amount / total) * 100 : 0);

  render() {
    const options = Object.keys(this.state);
    const totalFb = this.countTotalFeedback();
    const positivePercentage = this.countFeedbackPercentage(
      this.state.good,
      totalFb
    );
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
              {...this.state}
              total={totalFb}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
