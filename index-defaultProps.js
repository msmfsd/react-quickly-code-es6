"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'

export default class Button extends Component {
	constructor (props) {
		super(props)
		this.state = {  }
	}
  render () {
    return <button onClick={this.props.myRequiredFunction}>{this.props.buttonLabel}</button>
  }
}

// ES6 static vars for getDefaultProps - must be defined outside class
// ES7 can be set inside class defenition ie. static propTypes = {}
Button.propTypes = {
	buttonLabel: React.PropTypes.string,
	myRequiredFunction: React.PropTypes.func.isRequired
}
Button.defaultProps = {
	buttonLabel: 'Submit',
	myRequiredFunction: () => { console.log('myRequiredFunction called!'); }
}

export default class Content extends Component {
	constructor (props) {
		super(props)
	}
	render () {
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
