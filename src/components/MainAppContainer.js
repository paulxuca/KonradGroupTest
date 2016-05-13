import React from 'react';
import EachGame from './parts/EachGame';


const MainAppContainer = React.createClass({

	render(){
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
		var games = this.props.data;
		var date = (this.props.date && this.props.month)?`${months[this.props.month]} ${this.props.date} ${this.props.year}`: 'Pick a Date!'; 
		if(this.props.year.length < 4 || (Number(this.props.month) > 12 ||Number(this.props.month) <1) || (Number(this.props.date) > 31 ||Number(this.props.month) <1)){
			if(this.props.year == '' && this.props.month == '' && this.props.date == ''){
				date="Please Enter a date!"
			}else{
				date = 'Invalid Date!';
			}
		}
		return(
			<div className="container" style={{textAlign:'center'}}>
				<div className="row">
				<h1 style={{marginLeft:'auto', marginRight:'auto'}}>{date}</h1>
				</div>
					{
						games.map(function(result){
						if(result && (result['away_team_name'].toUpperCase() == 'BLUE JAYS' || result['home_team_name'].toUpperCase() == 'BLUE JAYS' )){
							var score_away = (result.status.status.toUpperCase() == 'FINAL')?result['linescore']['r']['away']:'';
							var score_home = (result.status.status.toUpperCase() == 'FINAL')?result['linescore']['r']['home']:'';
							return (
								<EachGame result={result} score_home={score_home} score_away={score_away}/>
							);
				}})}

					{games.map(function(result){
						if(result &&(result['away_team_name'].toUpperCase() != 'BLUE JAYS' && result['home_team_name'].toUpperCase() != 'BLUE JAYS' ) ){
							var score_away = (result.status.status.toUpperCase() == 'FINAL')?result['linescore']['r']['away']:'';
							var score_home = (result.status.status.toUpperCase() == 'FINAL')?result['linescore']['r']['home']:'';
						return (
								<EachGame result={result} score_home={score_home} score_away={score_away}/>
						);
				}})
				}
			</div>
			);
	}
});

export default MainAppContainer;