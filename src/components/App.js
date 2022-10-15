import { Component } from 'react';
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
    console.log(options);
    return (
      <Box p={4}>
        <h2>Please leave feedback</h2>
        <div>
          {options.map((option, i) => (
            <button
              type="button"
              key={i}
              onClick={() => this.addFeedback(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </Box>
    );
  }
}
