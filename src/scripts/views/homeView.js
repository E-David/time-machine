import React from "react"

var HomeView = React.createClass({
	getInitialState: function() {
		return {
			year: new Date().getFullYear(),
			activeButton: null,
			pace: 500
		}
	},
	_activatePast: function() {
		clearTimeout(this.state.intervalId)
		var currentThis = this
		var intervalId = setTimeout(this._activatePast,this.state.pace)
		this.setState({
			activeButton: "past",
			pace: currentThis.state.pace > 100 ? currentThis.state.pace * 0.9 : currentThis.state.pace,
			year: currentThis.state.year - 1,
			intervalId: intervalId
		})	
	},
	_activatePresent: function() {
		clearTimeout(this.state.intervalId,this.state.pace)
		var intervalId = setTimeout(this._activatePresent,this.state.pace)
		var currentThis = this
		this.setState({
			activeButton: "present",
			pace: currentThis.state.pace < 500 ? currentThis.state.pace / 0.9 : currentThis.state.pace,
			intervalId: intervalId
		})
	},
	_activateFuture: function() {
		clearTimeout(this.state.intervalId)
		var currentThis = this
		var intervalId = setTimeout(this._activateFuture,this.state.pace)
		this.setState({
			activeButton: "future",
			pace: currentThis.state.pace > 100 ? currentThis.state.pace * 0.9 : currentThis.state.pace,
			year: currentThis.state.year + 1,
			intervalId: intervalId
		})	
	},
	render: function() {
		var pastStyle = {
			backgroundColor: this.state.activeButton === "past" ? "green" : "red"
		}
		var presentStyle = {
			backgroundColor: this.state.activeButton === "present" ? "green" : "red"
		}
		var futureStyle = {
			backgroundColor: this.state.activeButton === "future" ? "green" : "red"
		}
		return (
			<div className="home-view">
				<h1>{this.state.year}</h1>
				<div className="machine-nav-bar">
					<button className="past"   style={pastStyle}    onClick={this._activatePast}></button>
					<button className="present"style={presentStyle} onClick={this._activatePresent}></button>
					<button className="future" style={futureStyle}  onClick={this._activateFuture}></button>
				</div>
			</div>

			)
	}
})

export default HomeView