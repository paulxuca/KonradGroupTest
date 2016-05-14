import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import MainAppContainer from './MainAppContainer'
import Navigation from './parts/Navigation'

const MainApp = React.createClass({
    getInitialState() {
    	return{
    		data:[],
    		year:'',
    		month:'',
    		date:'',
    		nextDate:''
    	}
    },

    onDateUpdate(year, date,month){
    	this.setState({
    		year, date, month
    	});
    	this.getDataScoreBoard(year, date, month);
    },


    handleNewData(res){
    	this.setState({data:res})
    },
    
    getDataScoreBoard(year, day, month){
    	if(day.length <2){
    		day = '0'+day
    	}
    	if(month.toString().length <2){
    		month = '0'+month
    	}
    	$.ajax({
    		type:"GET",
    		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    		url: `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`,
    		success: function(res){
    			this.setState({data: res.data.games.game,
    				nextDate:res.data.games['next_day_date']});
    		}.bind(this)
    	})
    },
    render() {
        return (
        	<div>
        	<Navigation onUpdate={this.onDateUpdate} nextDate={this.state.nextDate}/>
        		<MainAppContainer year={this.state.year} month={this.state.month} date={this.state.date} data={this.state.data}/>
        		</div>)
    }
});

export default MainApp;
