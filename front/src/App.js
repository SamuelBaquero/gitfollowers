import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';
import Search from './Search.js';
import StarUsers from './StarUsers.js';
import Star from './Star.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { username: 'No hay usuario seleccionado' };
  }

  componentDidMount(){
    this.setState({}, ()=>{
      var url = "/stared";
      fetch(url, {
        method:"GET",
        headers:{
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
      .then((resp)=>{
        if(resp.ok)
          return resp.json();
      })
      .then((resp2)=>{
        this.setState({
          stared: resp2.data
          }
        )
      });
    });
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

  starUser(username){
    fetch('/star', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Search className="search" getFollowers={this.getFollowers.bind(this)}>
        </Search>
        <br/>
        <Star className="star" username={this.state.username} starUser={this.starUser.bind(this)}></Star>
        <br/>
        <h2>Seguidores del Elegido</h2>
        <User className="user" username={this.state.username} followers={this.state.followers}></User>
        <br/>
        <h2>Usuarios con más estrellas en GitStars</h2>
        <StarUsers className="gitusers" stared={this.state.stared}></StarUsers>
      </div>
    );
  }
}

export default App;
