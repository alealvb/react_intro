import React, { Component } from 'react';

// props = { img: 'http' }
class Dog extends Component {
  render() {
    return <img src={this.props.img} />
  }
}

export default Dog;