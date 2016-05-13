import React from 'react';


const Navigation = React.createClass({
	getInitialState(){
		return {
			year: '',
			month:'',
			date:''
		}
	},

	handleSubmit(e){
		e.preventDefault();
		this.props.onUpdate(this.state.year, this.state.date, this.state.month);
	},

	handleChange(event){
		if(event.target.id == 'year' && event.target.value.length <5){
			this.setState({year:event.target.value});
		}else if(event.target.id == 'month' && event.target.value.length <3){
				this.setState({month: event.target.value})
		}else if(event.target.id == 'date' && event.target.value.length <3){
				this.setState({date: event.target.value})
		}
	},

	render(){
		return(
			<nav style={
			{backgroundColor: '#f4f5f6',
			 borderBottom: 'solid .1rem',
			 borderBottomColor:'#d1d1d1', 
			 display: 'block',
			 height: '5.2rem',
			 width:'100%'}}>
				<section className="container">
				<form style={{float:'right', lineHeight: '5rem'}} onSubmit={this.handleSubmit}>
					<fieldset>
						<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Year" onChange={this.handleChange} id="year" value={this.state.year}/>
						<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Month" onChange={this.handleChange} id="month" value={this.state.month}/>
						<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Date" onChange={this.handleChange} id="date" value={this.state.date}/>
						<button type="submit">Submit</button>
					</fieldset>
				</form>
				</section>
			</nav>
			);
	}

});

export default Navigation;