"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'

// React is phasing out mixins
// 1 alternative way is to create a base class
export default class BaseContent extends Component {

	componentWillMount (){
    console.log('BaseContent: componentWillMount is triggered')
  }
  componentDidMount (e){
    console.log('BaseContent: componentDidMount is triggered')
    console.log('DOM node: ', ReactDOM.findDOMNode(this))
  }
  componentWillReceiveProps (newProps){
    console.log('BaseContent: componentWillReceiveProps is triggered')
    console.log('new props: ', newProps)
  }
  shouldComponentUpdate (newProps, newState){
    console.log('BaseContent: shouldComponentUpdate is triggered')
    console.log('new props: ', newProps)
    console.log('new state: ', newState)
    return true
  }
  componentWillUpdate (newProps, newState){
    console.log('BaseContent: componentWillUpdate is triggered')
    console.log('new props: ', newProps)
    console.log('new state: ', newState)
  }
  componentDidUpdate (oldProps, oldState){
    console.log('BaseContent: componentDidUpdate is triggered')
    console.log('new props: ', oldProps)
    console.log('old props: ', oldState)
  }
  componentWillUnmount (){
    console.log('BaseContent: componentWillUnmount')
  }
	_onClickHandler (e) {
		e.preventDefault();
		console.log("BaseContent: _onClickHandler called by: " + e.currentTarget.id)
	}
}

// Components can then extend the base class
// remeber to call super to instantiate the parent class
export default class Content extends BaseContent {
	constructor (props) {
    super(props)
  }
  render() {
    return (
			<div>
				<h2>React extend base class</h2>
				<Content2 />
			</div>
		)
  }
}

// parent base class methods can be accessed with 'this.methodName'
export default class Content2 extends BaseContent {
	constructor (props) {
    super(props)
  }
  render() {
		return (
	 		<a id="content2Link" href="#" onClick={this._onClickHandler}>Base class can replace mixins for ES6 classes..</a>
		)
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
