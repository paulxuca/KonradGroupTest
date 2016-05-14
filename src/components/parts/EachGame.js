import React from 'react';


const EachGame = React.createClass({
    render() {
    	return(
    	<div className="col-md-3" key={this.props.result.id}>
			<div className="card card-block" style={{textAlign:'center'}}>
				<div className="row">
					<div className="col-xs-6">
					<h2 className={(Number(this.props.score_away) > Number(this.props.score_home))?"bold":''}>{this.props.score_away}</h2>
					<h6 className={(Number(this.props.score_away) > Number(this.props.score_home))?"bold":''}>{this.props.result['away_team_name']}</h6>
				</div>
					<div className="col-xs-6">
					<h2 className={(Number(this.props.score_home) > Number(this.props.score_away))?"bold":''}>{this.props.score_home}</h2>
					<h6 className={(Number(this.props.score_home) > Number(this.props.score_away))?"bold":''}>{this.props.result['home_team_name']}</h6>
				</div>
				</div>
					 <p className="card-text">{this.props.result.status.status}</p>
					 <button className={(this.props.result.status.status == 'Cancelled'|| this.props.result.status.status == 'Postponed')? 'btn btn-primary button-disabled':'btn btn-primary'} onClick={this.props.onClick} id={this.props.result.game_data_directory}>More Information</button>
			</div>
		</div>);
    }
});

export default EachGame;
