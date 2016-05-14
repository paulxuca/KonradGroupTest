import React from 'react';
import InningsTable from './parts/InningsTable';
import TeamViewer from './parts/TeamViewer';

const SideBarContainer = React.createClass({
	render(){
		var data = this.props.data;
		return(
		<div className="container">
	    		 <h4 style={{textAlign:'center', marginBottom:'0.5rem'}}>{data.away_fname} vs. {data.home_fname}</h4>
	    		 <p style={{textAlign:'center'}}>{data.date} - {data.venue_name}</p>
	    		<div className="row">
	    		<InningsTable data={data.linescore}  away={data.away_team_code.toUpperCase()} home={data.home_team_code.toUpperCase()}/>
	    		</div>		
	    		<TeamViewer data={data.batting} away={data.away_team_code.toUpperCase()} home={data.home_team_code.toUpperCase()}/>
    		</div>

			);
	}


});

export default SideBarContainer;


