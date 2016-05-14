import React from 'react';

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

const Navigation = React.createClass({
    getInitialState() {
        return {
            year: '',
            month: '',
            date: '',
            favouriteTeam:''
        }

    },
    handleSubmit(e) {
        e.preventDefault();
        var month;
        if (this.state.month.length == 2 && Number(this.state.month) < 10) {
            month = this.state.month.split('')[1];
        } else {
            month = this.state.month;
        }
        this.props.onUpdate(this.state.year, this.state.date, month, this.state.favouriteTeam);
    },

    handleChange(event) {
        if (event.target.id == 'year' && event.target.value.length < 5) {
            this.setState({ year: event.target.value });
        } else if (event.target.id == 'month' && event.target.value.length < 3) {
            this.setState({ month: event.target.value })
        } else if (event.target.id == 'date' && event.target.value.length < 3) {
            this.setState({ date: event.target.value })
        } else if(event.target.id == 'favourite'){
        	this.setState({ favouriteTeam: event.target.value })
        }
    },

    render() {
        return(<nav style= {
        	{
                backgroundColor: '#f4f5f6',
                borderBottom: 'solid .1rem',
                borderBottomColor: '#d1d1d1',
                display: 'block',
                height: '5.2rem',
                width: '100%'
            }}>
		<section className="container">
		<form style={{float:'right', lineHeight: '5rem'}} onSubmit={this.handleSubmit}>
			<fieldset>
				<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Year" onChange={this.handleChange} id="year" value={this.state.year}/>
				<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Month" onChange={this.handleChange} id="month" value={this.state.month}/>
				<input style={{width:60, marginRight:10, fontSize: 14}} type="text" placeholder="Date" onChange={this.handleChange} id="date" value={this.state.date}/>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
		<form style={{width:'20%', float:'right', lineHeight:'5.2rem', marginRight:20}}>
		<fieldset>
			<input type="text" placeholder="Favourite Team" id="favourite" value={this.state.favouriteTeam} onChange={this.handleChange}/>
		</fieldset>
		</form>
		
		</section>
	</nav>
	);
	}
});

export default Navigation;