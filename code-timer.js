"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export class TimerWrapper extends Component {

	constructor (props) {
		super(props)
		this.state = {time:null, int:null}
		this.startTimer = this.startTimer.bind(this)
	}

	startTimer (time) {
		clearInterval(this.state.int)
		var int = setInterval(() => {
			let t1 = this.state.time - 1
			if(t1 == 0) clearInterval(int)
			this.setState({time: t1})
		}, 1000)
		return this.setState({time: time, int:int})
	}

	render () {
		return (
			<div className="row-fluid">
				<h2>Timer</h2>
				<div className="btn-group" role="group" >
					<Button time="5" startTimer={this.startTimer}/>
					<Button time="10" startTimer={this.startTimer}/>
					<Button time="15" startTimer={this.startTimer}/>
				</div>
				<Timer time={this.state.time}/>
				<audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
			</div>
		)
	}

}

export class Timer extends Component {

	constructor (props) {
    super(props)
  }

	render () {
    if(this.props.time == 0) {
			document.getElementById('end-of-time').play()
		}
		if(this.props.time == null || this.props.time == 0) return <div/>
		return <h1>Time left: {this.props.time}</h1>
  }

}

export class Button extends Component {

	constructor (props) {
    super(props)
		this.startTimer = this.startTimer.bind(this)
  }

	startTimer (e) {
		return this.props.startTimer(this.props.time)
	}

	render () {
    return <button type="button" className="btn-default btn" onClick={this.startTimer}>{this.props.time} seconds</button>
  }

}

ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('content')
)
