import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'Grab a knife, bread, peanut butter, & jelly',
        'Grab 2 slices of bread and put them side by side',
        'Get your knife, and dip it in jelly',
        'Spread your jelly on one slice of bread',
        'Get your knife once more, and dip it in peanut butter',
        'Spread your peanut butter on the second slice of bread',
        'Put the 2 slices together and enjoy!',
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
