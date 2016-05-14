import React from 'react';

const TeamViewer = React.createClass({
	getInitialState(){
		return{
			focus:'away'
		}
	},

	handleSwitchTeam(e){
		this.setState({focus:e.target.id});
	},

	render(){
		var displayed = (this.state.focus == 'away')?(

			this.props.data[1].batter.map(function(each){
				return(<tr>
					<td>{each.name}</td>
					<td>{each.ab}</td>
					<td>{each.r}</td>
					<td>{each.h}</td>
					<td>{each.rbi}</td>
					<td>{each.bb}</td>
					<td>{each.so}</td>
					<td>{each.avg}</td>
				</tr>)
			})
			):(
			this.props.data[0].batter.map(function(each){
				return(<tr>
					<td>{each.name}</td>
					<td>{each.ab}</td>
					<td>{each.r}</td>
					<td>{each.h}</td>
					<td>{each.rbi}</td>
					<td>{each.bb}</td>
					<td>{each.so}</td>
					<td>{each.avg}</td>
				</tr>)
			})
			)
		return(
			<div>
			<div className="row">
			<h4 style={{marginLeft:'auto', marginRight:'auto'}} className="team-selectors"><span id="away" onClick={this.handleSwitchTeam} className={(this.state.focus == 'away')?'bold':''}>{this.props.away}</span> 
			 |  
			<span id="home" onClick={this.handleSwitchTeam} className={(this.state.focus == 'home')?'bold':''}>{this.props.home}</span></h4>
			</div>
				<div className="row">
				<table>
				  <thead>
				    <tr style={{fontWeight:700}}>
				    <th>Name</th>
				    <th>AB</th>
				    <th>R</th>
				    <th>H</th>
				    <th>RBI</th>
				    <th>BB</th>
				    <th>SO</th>
				    <th>AVG</th>
				    </tr>
			    </thead>
			    <tbody>
			    {displayed}
			    
			    </tbody>
			    </table>
			</div></div>);
	}

});

export default TeamViewer;