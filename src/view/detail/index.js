import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      checked: '1'
    }
  }
  test = (event) => {
    console.log(event);
  }
  render () {
    return (
      <div className="app_headerbox">
        详情信息
      </div>
    );
  }
}

export default Index;