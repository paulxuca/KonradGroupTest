import React from 'react';


const InningsTable = React.createClass({
	render(){
		var inningsHeading = [];
		for(var i=0; i< this.props.data.inning_line_score.length;i++){
		  	inningsHeading.push(<th>{i+1}</th>) 
		  }
		return(
			<table>
			  <thead>
			    <tr>
			      <th>Team</th>
				  {inningsHeading}
				  <th style={{fontWeight:'700'}}>R</th>
			      <th style={{fontWeight:'700'}}>H</th>
			      <th style={{fontWeight:'700'}}>E</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>{this.props.away}</td>
			      {this.props.data.inning_line_score.map(function(each){
			      	return(<td>{each.away}</td>);
			      })}
			      <td style={{fontWeight:'700'}}>{this.props.data.away_team_runs}</td>
			      <td style={{fontWeight:'700'}}>{this.props.data.away_team_hits}</td>
			      <td style={{fontWeight:'700'}}>{this.props.data.away_team_errors}</td>
			    </tr>
			    <tr>
			      <td>{this.props.home}</td>
			      {this.props.data.inning_line_score.map(function(each){
			      	return(<td>{each.home}</td>);
			      })}
			      <td style={{fontWeight:'700'}}>{this.props.data.home_team_runs}</td>
			      <td style={{fontWeight:'700'}}>{this.props.data.home_team_hits}</td>
			      <td style={{fontWeight:'700'}}>{this.props.data.home_team_errors}</td>
			    </tr>
			  </tbody>
			</table>
			);
	}

});


export default InningsTable;