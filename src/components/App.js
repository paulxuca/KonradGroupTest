import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import moment from 'moment';
import MainAppContainer from './MainAppContainer';
import Navigation from './parts/Navigation';
import Sidebar from 'react-sidebar';
import SideBarContainer from './SideBarContainer'
import NotificationContainer from './NotificationContainer';

 var months = {
     'Jan': 1,
     'Feb': 2,
     'Mar': 3,
     'Apr': 4,
     'May': 5,
     'Jun': 6,
     'Jul': 7,
     'Aug': 8,
     'Sept': 9,
     'Oct': 10,
     'Nov': 11,
     'Dec': 12
 }

const MainApp = React.createClass({
    getInitialState() {
        return {
            data: [],
            year: '',
            month: '',
            date: '',
            nextDate: '',
            sidebarOpen: false,
            notificationOpen: false,
            notificationContent:'',
            sidebarContent:'',
            favouriteTeam: ''
        }
    },
    onDateUpdate(year, date, month, queryOptions) {
        this.setState({
            year,
            date,
            month,
            queryOptions
        });
        this.getDataScoreBoard(year, date, month);
    },

    handleNewData(res) {
        this.setState({ data: res })
    },
    changeDate(e) {
        var change = (e.target.id == 'previous') ? -1 : 1;
        this.setState({ date: (Number(this.state.date) + change) });
        var current = moment([Number(this.state.year), Number(this.state.month) - 1, Number(this.state.date) + change])
        var delim = current._d.toString();
        var year = delim.split(' ')[3];
        var month = months[delim.split(' ')[1]];
        var date = delim.split(' ')[2];
        this.setState({ date: date, month: month, year: year })
        this.getDataScoreBoard(year, date, month);
    },
    onSetSidebarOpen(open){
 		this.setState({sidebarOpen:open});
 	},
 	onSetNotificationOpen(open){
 		this.setState({notificationOpen:open});
 	}
 	,
    getDataScoreBoard(year, day, month) {
        if (day.length < 2) day = '0' + day;
        if (month.toString().length < 2) month = '0' + month;
        $.ajax({
            type: "GET",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            url: `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`,
            success: function(res) {
                this.setState({
                    data: res.data.games.game,
                    nextDate: res.data.games['next_day_date']
                });
            }.bind(this),
             error:function(err){
            	if(err){
            		this.setState({
                    data: '',
                    nextDate:''
                });
            	}
            }.bind(this)
        })
    },
    handleNotfificationClick(e){
    	if(this.state.notificationContent == ''){
    		$.ajax({
	         type: "GET",
	         contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	         url: `http://gd2.mlb.com/components/game/mlb/notifications.json`,
	         success: function(res) {
	             this.setState({notificationOpen: true, notificationContent:res});
	         }.bind(this)
	     })
    	}else{
    		this.setState({notificationOpen:true});
    	}
    },
    handleGameClick(e) {
	     $.ajax({
	         type: "GET",
	         contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	         url: `http://gd2.mlb.com${e.target.id}/boxscore.json`,
	         success: function(res) {
	             this.setState({sidebarOpen: true, sidebarContent:res});
	         }.bind(this)
	     })
 	},
    render() {
    	var data = (this.state.sidebarContent != '')?this.state.sidebarContent.data.boxscore:'';
    	var sidebarContent = (this.state.sidebarContent != '')?(
    		<SideBarContainer data={data}/>): '';
    	var notifications = (this.state.notificationContent != '')?this.state.notificationContent:'';
    	var notificationContent = (this.state.notificationContent!='')?(
    		<NotificationContainer data={notifications}/>
    		):'';

        return (
        	<div>
        	 <Sidebar sidebar={notificationContent}
        	 		  open={this.state.notificationOpen}
        	 		  onSetOpen={this.onSetNotificationOpen}
        	 		  pullRight={true}
           			  styles={{sidebar:{width:'20%', backgroundColor:'white'}}}>
		           			   <Sidebar sidebar={sidebarContent}
				           		open={this.state.sidebarOpen}
				           		onSetOpen={this.onSetSidebarOpen}
				           		styles={{sidebar:{width:'50%', backgroundColor:'white'}}}>
				           		<Navigation onUpdate={this.onDateUpdate} nextDate={this.state.nextDate} onNotificationClick={this.handleNotfificationClick}/>
				    			<MainAppContainer onDateSwitch={this.changeDate} year={this.state.year} month={this.state.month} date={this.state.date} data={this.state.data} query={this.state.queryOptions} onClick={this.handleGameClick}/>
				  			</Sidebar>
             </Sidebar>

    		
  			</div>);
    }
});

export default MainApp;
