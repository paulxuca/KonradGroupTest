import React from 'react';

const DatePicker = React.createClass({
	render(){
		return(<div className="row">
			<ul style={{marginLeft:'auto', marginRight:'auto', lineHeight:'5rem', listStyleType:'none'}}>
				<li onClick={this.props.onClick} id="previous" style={{float:'left', marginRight:10}} className={"date-selectors " + (!this.props.date?'hidden':'show')}>Previous Date</li>
				<li onClick={this.props.onClick} id="next" style={{float:'left'}} className={"date-selectors " + (!this.props.date?'hidden':'show')}>Next Date</li>
		</ul></div>);
	}
});


export default DatePicker;