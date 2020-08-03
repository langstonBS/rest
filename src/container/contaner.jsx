import React, { Component } from 'react';
import { deleteRequest, postRequest, updateRequest, getRequest } from '../servases/reqest';
import FormDisplay from '../formdisplay/Formdisplay.jsx';


export default class Contaner extends Component {

  state = {
    url:'',
    body: '',
    method: '', 
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { url, body, method } = this.state;

    switch(method) {
      case 'get':
        getRequest(url)
          .then(res => this.setState({ array: res }));
        break;
      case 'delete':
        deleteRequest(url);
        break;
      case 'put':
        updateRequest(url, body);
        break;
      case 'post':
        postRequest(url, body);
        break;
      default:
        console.log('A method of sending was not regeisterd');
        break;
    }

    this.setState({
      url: '',
      body: '',
      method: ''
      
    });
  }


  render() {
    const { url, body } = this.state;
    return (
      <div>
        <FormDisplay url={url} body={body} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        
      </div>
    );
  }
}
