"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export class ClickCounterButton extends Component {

	constructor (props) {
    super(props)
  }

	render () {
    return <button onClick={this.props.handler}>Button</button>
  }

}

export class Content extends Component {

	constructor (props) {
    super(props)
    this.state = {}
		this.click = this.click.bind(this)
  }

	componentDidMount () {
		this.setState({myvar:17})
		setInterval(() => {
			this.setState({hash: Math.random()})
		}, 5100)
	}

	getURL () {
		return 'http://github.com'
	}

	click () {
		this.setState( (previousState, currentProps) => {
			return {myvar: previousState.myvar + 1}
		})
	}

  render () {
    return (
      <div>
        <h1>Name: {this.state.myvar}</h1>
        <p>This value is random: {this.state.hash}</p>
				<p>URL: {this.getURL()}</p>
				<ClickCounterButton handler={this.click}/>
      </div>
    )
  }

}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
