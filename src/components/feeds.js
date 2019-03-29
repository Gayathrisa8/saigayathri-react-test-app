import React, {Component} from 'react';
import './styles.css';

export default class Feeds extends Component {
  render() {
    const {url, title} = this.props.data;
    return (
      <div className='feeds-container'>
        <div className='feeds-title'>
          {title}
        </div>
        <div>
          <img src={url} className='feeds-image'/>
        </div>
      </div>
    )
  }
}

Feeds.defaultProps = {
  data: {
    url: '',
    title: ''
  }
}