import React, {Component} from 'react';
import './Star.css'

class Star extends Component{
	constructor(props){
		super(props);
	}

	renderStar(){
		return(this.props.username == 'No hay usuario seleccionado')?
				'':(<div className="starBut" onClick={()=>{this.props.starUser(this.props.username)}}>
					Dar Estrella!
				</div>)
	}

	render(){
		return(
			<div>
				{this.renderStar()}
			</div>
		)
	}
}
export default Star;