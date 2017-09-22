import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';
import Search from './Search.js';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { username: 'None' };
  }

  getFollowers(username){
    this.setState({username:username}, ()=>{
      var url = "/followers/".concat(username);
      fetch(url, {
        method:"GET",
        headers:{
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
      .then((res)=>{
        if(res.ok)
          return res.json();
      })
      .then((res2)=>{
        this.setState({
          followers: res2.data
          }
        )
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Search className="search" getFollowers={this.getFollowers.bind(this)}>
        </Search>
        <User className="user" username={this.state.username} followers={this.state.followers}></User>
        <br/>
      </div>
    );
  }
}

export default App;
