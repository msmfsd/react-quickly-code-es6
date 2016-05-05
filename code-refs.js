"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export class TimerWrapper extends Component {

	constructor (props) {
		super(props)
		this.state = {dom:null, val:null}
		this.click = this.click.bind(this)
	}

	click (e) {
		e.preventDefault()
		// REFS
		// same thing
		console.log(this.refs.myInput)
		console.log(ReactDOM.findDOMNode(this.refs.myInput))
		// get input node and value from refs
		let str = ReactDOM.findDOMNode(this.refs.myInput).toString();
		this.setState({val:this.refs.myInput.value})
		this.setState({dom:str})
	}

	render () {
		return (
			<div className="row-fluid">
				<h2>Refs</h2>
					<h4>Inputs dom node: {this.state.dom}</h4>
					<h4>Input val: {this.state.val}</h4>
				<form id="react-form">
					<input type="text" ref="myInput" value="Yeah" readOnly name="myInput"/>
					<button type="button" onClick={this.click}>Submit</button>
				</form>
			</div>
		)
	}

}
ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('content')
)
