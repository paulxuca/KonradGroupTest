import React from 'react';
import moment from 'moment';
import Notification from './parts/Notification';

const NotificationContainer = React.createClass({
	render(){
		const data = this.props.data;
		const date = moment().format('lll');
		return(
			<div className="container">
	    		 <div className="row">
	    		 	<h4 style={{marginLeft:'auto', marginRight:'auto', marginTop:10, fontWeight:600, fontSize:20, letterSpacing:3, textTransform: 'uppercase'}}>Notification Center</h4>
	    		 </div>
	    		 <div className="row">
	    		 <p style={{marginLeft:'auto', marginRight:'auto'}}>Last Updated: {date}</p>
	    		 </div>
	    		 	{data.data.alerts.game.map(function(each){
	    		 		if(each.alert.length>1){
	    		 			return(<Notification data={each} location={each.alert[0].text.split(':')[0]} text={each.alert[0].text.split(':')[1]} key={each.game_id}/>);
	    		 		}else{
	    		 			return(<Notification data={each} location={each.alert.text.split(':')[0]} text={each.alert.text.split(':')[1]} key={each.game_id}/>);
	    		 		}
	    		 	})}
    		</div>
			);
	}
});

export default NotificationContainer;