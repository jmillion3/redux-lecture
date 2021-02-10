import React, {Component} from 'react';
import './App.css';

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

  render(){
    return (
      <div className="App">
        <input name="username" type="text" value={this.state.username}/>
        <input name="email" type="text" value={this.state.email}/>
      </div>
    );
  }
}

export default App;
