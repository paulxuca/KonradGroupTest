import React from 'react';
import moment from 'moment'
import EachGame from './parts/EachGame';
import DatePicker from './parts/DatePicker';


var months = {
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sept',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}

const MainAppContainer = React.createClass({
	
		parseQueryOptions(){
			if(this.props.query){
			if(this.props.query.toUpperCase().indexOf('TEAM') != -1 || this.props.query.toUpperCase().indexOf('STADIUM') != -1 ){
				if(this.props.query.trim().split(':')[1]!= ''){
					if(this.props.query.trim().split(':')[0].toUpperCase() == 'TEAM'){
						return {
						q:{
							'away':'away_team_name',
							'home':'home_team_name'
						},
						res: this.props.query.split(':')[1].toUpperCase()
						}
					}
					else if(this.props.query.trim().split(':')[0].toUpperCase() == 'STADIUM'){
						return {
						q:{
							'away':'venue',
							'home':'venue'
						},
						res: this.props.query.split(':')[1].toUpperCase()
						}
					}
				}
			}
	}
	return{
				q: {
					'away':'away_team_name',
					'home':'home_team_name',
				},
				res: 'BLUE JAYS'
			}
	},
	

		render(){
		var games = this.props.data;
		var current = moment([Number(this.props.year), Number(this.props.month)-1, Number(this.props.date)]);
		var date = (this.props.date && this.props.month)?`${months[this.props.month]} ${this.props.date} ${this.props.year}`: 'Pick a Date!'; 
		if(this.props.year == '' && this.props.month == '' && this.props.date == ''){
			date="Please Enter a date!"
		}
		else if(current.format() == 'Invalid date'){
				date = 'Invalid Date!';
		}
		var query = this.parseQueryOptions();
		if(games && games.length){
			return(
			<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem'}}>{date}</h1>
				</div>
				<DatePicker onClick={this.props.onDateSwitch} date={this.props.date}/>
					{games.map(function(result){
					if(result && (result[query.q.away].toUpperCase() == query.res || result[query.q.home].toUpperCase() == query.res )){
						var score_away = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['away']:'0';
						var score_home = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['home']:'0';
						return (
							<EachGame onClick={this.props.onClick} result={result} score_home={score_home} score_away={score_away} key={result.id}/>
						);
					}
					}, this)}

					{games.map(function(result){
					if(result &&(result[query.q.away].toUpperCase() != query.res  && result[query.q.home].toUpperCase() != query.res) ){
						var score_away = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['away']:'0';
						var score_home = (result.status.status.toUpperCase() != 'CANCELLED' && result.status.status.toUpperCase() != 'POSTPONED')?result['linescore']['r']['home']:'0';
					return (
							<EachGame onClick={this.props.onClick} result={result} score_home={score_home} score_away={score_away} key={result.id}/>
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
				<DatePicker onClick={this.props.onDateSwitch} date={this.props.date}/>
				<EachGame onClick={this.props.onClick} result={this.props.data} score_home={this.props.data.linescore.r.home} score_away={this.props.data.linescore.r.away} key={this.props.data.id}/>
				</div>);
		}else{
			var gamesMessage = (this.props.date == "")?'':"No Games Today!";
			return(<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem'}}>{date}</h1>
				</div>
				<DatePicker onClick={this.props.onDateSwitch} date={this.props.date}/>
				<h4>{gamesMessage}</h4>
				</div>);
		}
		
	}
});

export default MainAppContainer;