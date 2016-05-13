import React from 'react';

const MainView = React.createClass({
	render(){
		return(<container>
			{this.props.games}

			<h1>Hello!</h1>
			</container>);
	}

});

export default MainView;