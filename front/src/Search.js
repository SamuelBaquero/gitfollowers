import React, {Component} from 'react';
import './Search.css'

class Search extends Component{
	constructor(props){
		super(props);
	}

	getFollowers = (event)=>{
	    var code = event.keyCode || event.which;
	    if(code === 13) {
	    	this.props.getFollowers(event.target.value);
	    }
	}

	render(){
		return(
			<div className="searchbox">
				<h1>Buscar Login de Github</h1>
				<input className="box" type="search" onKeyDown={this.getFollowers}/>
			</div>
		)
	}
}
export default Search;