import React, { Component } from 'react';
import {
  withRouter
} from 'react-router';
import Footer from '../../component/footer/index'

class Index extends Component {
  handleClick() {
    console.log(this.props);
    this.props.history.push('/detail')
  }
  render () {
    return (
      <div className="wrapper">
        <div className="app_headerbox">
          首页
        </div>
        <ul>
          <li onClick={() => {this.handleClick()}} >列表1</li>
          <li onClick={() => {this.handleClick()}}>列表2</li>
          <li onClick={() => {this.handleClick()}}>列表3</li>
          <li onClick={() => {this.handleClick()}}>列表4</li>
          <li onClick={() => {this.handleClick()}}>列表5</li>
        </ul>
        <Footer type={1}/>
      </div>
    );
  }
}

export default withRouter(Index);