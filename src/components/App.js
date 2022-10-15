import { Component } from 'react';
import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
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
      </Box>
    );
  }
}
