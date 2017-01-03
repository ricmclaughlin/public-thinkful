import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {cardText: ''};
  }

  handleButtonClick(event) {
    event.preventDefault();
    console.log(this.state.cardText);
  }

  handleChange(event) {
    this.setState({cardText: event.target.value});
  }

  render() {
    return (
      <List 
        rowTitle={this.props.rowTitle} 
        cards={this.props.cards} 
        inputHandler={this.handleChange}
        buttonClickHandler={this.handleButtonClick}

      />
    );  
  }
}
