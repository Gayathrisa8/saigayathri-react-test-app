import React, {Component, PureComponent} from 'react';
import './styles.css';

export default class InputBoxes extends Component {
  state={
    url: '',
    title: '',
  }
  inputBoxChange(event, type) {
    const {value} = event.target;
    this.setState({
      [type]: value
    })
  }
  submitPost() {
    this.props.newPost({...this.state})
  }
  render() {
    return (
      <div className='input-container'>
        <input className='inputBoxFullWidth' placeholder="Enter URL" onChange={(event)=>this.inputBoxChange(event, 'url')}/>
        <input className='inputBoxTitle' placeholder="Title" onChange={(event)=>this.inputBoxChange(event, 'title')}/>
        <button className='feedPostButton' onClick={this.submitPost.bind(this)}>New Post</button>
      </div>
    )
  }
}

InputBoxes.defaultProps = {
  newPost: ({url, title}) => {}
}