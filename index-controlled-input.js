"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'

export default class Content extends Component {
	constructor (props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.state = { val:'' }
	}
	onChange (e) {
		this.setState({ val: e.target.value.replace(/[^0-9]/ig, '') })
	}
  render () {
    return (
			<input ref="ti" type="text" onChange={this.onChange} value={this.state.val} placeholder="55" />
		)
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
