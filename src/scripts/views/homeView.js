import React from "react"

var HomeView = React.createClass({
	getInitialState: function() {
		return {
			currentYear: new Date().getFullYear(),
			activeButton: "present"
		}
	},
	_activatePast: function() {
		var currentThis = this
		this.setState({
			activeButton: "past"
		})
		this._checkActiveButton()
	},
	_activatePresent: function() {
		var currentThis = this
		this.setState({
			activeButton: "present"
		})
	},
	_activateFuture: function() {
		var currentThis = this
		this.setState({
			activeButton: "future"
		})
		this._checkActiveButton()
	},
	_decrease: function() {
		var currentThis = this
		var buttonStatus = this.state.activeButton,
			year = this.state.currentYear
		this.setState({
			currentYear: buttonStatus === "past" ? year -= 1 : year
		})
	},
	_increase: function() {
		var currentThis = this
		var buttonStatus = this.state.activeButton,
			year = this.state.currentYear
		this.setState({
			currentYear: buttonStatus === "future" ? year += 1 : year
		})
	},
	_checkActiveButton: function() {
		console.log(this.state.activeButton)
		var currentThis = this
		if(this.state.activeButton === "past"){
			setInterval(function(){currentThis._decrease()},1000)
		} else if (this.state.activeButton === "future"){
			setInterval(function(){currentThis._increase()},1000)
		} else {
			clearInterval(currentThis._decrease)
			clearInterval(currentThis._increase)
		}
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
				<h1>{this.state.currentYear}</h1>
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