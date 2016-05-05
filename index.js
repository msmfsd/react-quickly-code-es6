"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'

export default class Content extends Component {
	constructor (props) {
		super(props)
		this.state = { }
	}
  render () {
    return (
			<p>Replace code here with one of the example js files eg. code-form-refs.js</p>
		)
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
