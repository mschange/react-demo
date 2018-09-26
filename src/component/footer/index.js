import React, {Component} from 'react';
import { Link } from 'react-router-dom'

require('./index.css')

class Footer extends Component {
  
  render () {
    const { type } = this.props;
    return (
      <ul className="footer">
        <Link to="/" className="pt">
          <img src={type === 1 ? require("../../static/icon/icon_active_person.png") : require("../../static/icon/icon_person.png")} alt="首页"/>
          <p className={type === 1 ? 'active' : ''}>首页</p>
        </Link>
        <Link to="/main" className="pt">
        <img src={type === 2 ? require("../../static/icon/icon_active_person.png") : require("../../static/icon/icon_person.png")} alt="新闻"/>
          <p className={type === 2 ? 'active' : ''}>新闻</p>
        </Link>
        <Link to="/shop" className="pt">
        <img src={type === 3 ? require("../../static/icon/icon_active_person.png") : require("../../static/icon/icon_person.png")} alt="商城"/>
          <p className={type === 3 ? 'active' : ''}>商城</p>
        </Link>
        <Link to="/my" className="pt">
        <img src={type === 4 ? require("../../static/icon/icon_active_person.png") : require("../../static/icon/icon_person.png")} alt="我的"/>
          <p className={type === 4 ? 'active' : ''}>我的</p>
        </Link>
      </ul>
    )
  }
}

export default Footer;