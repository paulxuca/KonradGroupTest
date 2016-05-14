import React from 'react';
import EachGame from './parts/EachGame';
import moment from 'moment'

const MainAppContainer = React.createClass({
		getInitialState(){
			return{
				sidebarOpen: false
			}
		},
		handleGameClick(e){
				console.log(e.target.id);
		},
		render(){
		var games = this.props.data;
		var current = moment([Number(this.props.year), Number(this.props.month)-1, Number(this.props.date)]);
		var months={
			'1': 'Jan',
			'2':'Feb',
			'3':'Mar',
			'4':'Apr',
			'5':'May',
			'6':'Jun',
			'7':'Jul',
			'8':'Aug',
			'9':'Sept',
			'10':'Oct',
			'11':'Nov',
			'12':'Dec',
		}
		var gamesMessage;
		var date = (this.props.date && this.props.month)?`${months[this.props.month]} ${this.props.date} ${this.props.year}`: 'Pick a Date!'; 
		if(this.props.year == '' && this.props.month == '' && this.props.date == ''){
			date="Please Enter a date!"
		}
		else if(current.format() == 'Invalid date'){
				date = 'Invalid Date!';
		}
		if(!games&& this.props.date != ''){
			gamesMessage="No Games found!"
		}
		if(games && games.length){
			return(
			<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem'}}>{date}</h1>
				</div>
				<h4>{gamesMessage}</h4>
					{games.map(function(result){
					if(result && (result['away_team_name'].toUpperCase() == 'BLUE JAYS' || result['home_team_name'].toUpperCase() == 'BLUE JAYS' )){
						var score_away = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['away']:'0';
						var score_home = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['home']:'0';
						return (
							<EachGame onClick={this.handleGameClick} result={result} score_home={score_home} score_away={score_away} key={result.id}/>
						);
					}
					}, this)}

					{games.map(function(result){
					if(result &&(result['away_team_name'].toUpperCase() != 'BLUE JAYS' && result['home_team_name'].toUpperCase() != 'BLUE JAYS' ) ){
						var score_away = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['away']:'0';
						var score_home = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['home']:'0';
					return (
							<EachGame onClick={this.handleGameClick} result={result} score_home={score_home} score_away={score_away} key={result.id}/>
						);
					}}, this)}
			</div>
			);
		}else if(games && games.game_type){
			return(
				<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem'}}>{date}</h1>
				</div>
				<h4>{gamesMessage}</h4>
				<EachGame onClick={this.handleGameClick} result={this.props.data} score_home={this.props.data.linescore.r.home} score_away={this.props.data.linescore.r.away} key={this.props.data.id}/>
				</div>);
		}else{
			return(<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem'}}>{date}</h1>
				
				</div>
				<h4>{gamesMessage}</h4>
				</div>);
		}
		
	}
});

export default MainAppContainer;