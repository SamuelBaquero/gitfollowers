import React, {Component} from 'react';
import './User.css'

class User extends Component{
	constructor(props){
		super(props);
		this.state={ username: 'No'}
	}

	getFollowers(username){
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
          		username: username,
            	followers: res2.data
            }
          )
        });	
    }

	renderUsername(){
		return  (
			(this.props.username)?this.props.username:this.state.username
		);
	}

	renderFollowers(){
		return (
			(this.state.followers)?
				this.state.followers.map(
					(t)=>{
						return (
							<div>
								<User
									className="user" username={t.login} getWatched={t.getWatched}>
								</User>	
							</div>
						)
					}
				):
				(this.props.followers)?
					this.props.followers.map(
						(t)=>{
							return (
								<div>
									<User
										className="user" username={t.login} getWatched={t.getWatched}>
									</User>	
								</div>
							)
						}
					)
				:'Haz click en el nombre para mostrar seguidores'
		);
	}

	render(){
		return(
			<div className="user">
				<h3 className="head" onClick={()=>{this.getFollowers(this.props.username)}}>{this.renderUsername()}</h3>
				<div className="followers">{this.renderFollowers()}</div>
			</div>
		);
	}
}
export default User;