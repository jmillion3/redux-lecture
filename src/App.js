import React, {Component} from 'react';
import './App.css';
import { connect } from "react-redux";
import {loginUser} from './redux/reducer';


class App extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      email: ''
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleClick = () => {
    const {username, email} = this.state;
    let user = {username, email}
    this.props.loginUser(user)
    this.setState({
      username: '',
      email: ''
    })
  }

  render(){
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e)} name="username" type="text" value={this.state.username} placeholder="Username"/>
        <input onChange={e => this.changeHandler(e)} name="email" type="text" value={this.state.email} placeholder="Email"/>
        <button onClick={this.handleClick}>Add User</button>
        <h3>the username is {this.props.user.username}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(App);
