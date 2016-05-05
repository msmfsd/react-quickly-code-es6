"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'

export default class Content extends Component {
	constructor (props) {
		super(props)
		this.state = { val:'' }
	}
  render () {
    return (
			<p></p>
		)
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
