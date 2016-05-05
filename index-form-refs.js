"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class Content extends Component {

	constructor (props) {
		super(props)
		this.state = {prompt:'Please enter your email to win $1,000,000.'}
		this.submit = this.submit.bind(this)
	}

	submit (e){
    var emailAddress = this.refs.emailAddress
    var comments = this.refs.comments
    console.log(ReactDOM.findDOMNode(emailAddress).value)
    console.log(ReactDOM.findDOMNode(comments).value)
		this.setState({ prompt:'success!' });

  }

	render () {
    return (
      <div className="well">
        <p>{this.state.prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control"  placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
        </div>
				<div className="form-group">
					<select multiple={true} value={['meteor', 'react']}>
						<option value="meteor">Meteor</option>
						<option value="react">React</option>
						<option value="jQuery">jQuery</option>
					</select>
				</div>
      </div>
    )
  }

}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
