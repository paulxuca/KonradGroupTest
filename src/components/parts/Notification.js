import React from 'react';


const Notification = React.createClass({
	render(){
		return(
			<div>
			<div className="row">
				<p style={{fontSize: 14, textTransform:'uppercase', fontWeight:500}}>{this.props.location}</p>
			</div>
			<div className="row">
				<p>{this.props.text}</p>
			</div>
			</div>
			);
	}


});

export default Notification;