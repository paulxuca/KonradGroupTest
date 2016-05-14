import React from 'react';


const InningsTable = React.createClass({
	render(){
		return(
			<table>
			  <thead>
			    <tr>
			      <th>Team</th>
			      <th>1</th>
			      <th>2</th>
			      <th>3</th>
			      <th>4</th>
			      <th>5</th>
			      <th>6</th>
			      <th>7</th>
			      <th>8</th>
			      <th>9</th>
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