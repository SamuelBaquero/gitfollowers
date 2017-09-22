import React, {Component} from 'react';

class StarUsers extends Component{
	constructor(props){
		super(props);
	}
	
	renderStared(){
		return(this.props.stared)?
			this.props.stared.map((t)=>{
				<div>
					<div className="starUser">{t.username}</div>
					<div className="count">{t.stars}</div>
				</div>
			}):
			'No hay usuarios con estrellas.'
	}

	render(){
		return(
			<div>
				{this.renderStared()}
			</div>
		)
	}
}
export default StarUsers;