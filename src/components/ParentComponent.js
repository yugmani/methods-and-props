import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Parent'
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}! Namaste!`);
  }

  render() {
    return (
      <div class="parent">
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
