import React, {Component} from 'react';

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
				<input type="search" onKeyDown={this.getFollowers}/>
			</div>
		)
	}
}
export default Search;