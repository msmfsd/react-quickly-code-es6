"use strict"

require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component, PropTypes, DefaultProps } from 'react'
import ReactDOM from 'react-dom'
import Reflux from 'reflux'

// Reflux: action
var loadMessages = Reflux.createAction()
// Reflux: store
var messageStore = Reflux.createStore({
  init: function() {
    this.listenTo(loadMessages, 'onLoadMessages')
  },
  onLoadMessages: function(url){
    var _this = this
    setTimeout(function(){
      _this.trigger([{name: 'Azat', message: 'React rocks!'}])
    }, 1000)
  }
})

var Content = React.createClass({
  componentWillMount:function(){
    loadMessages()
  },
  componentDidMount: function(){
    messageStore.listen(this.update)
  },
  update: function(messages){
    return this.setState({messages: messages})
  },
  render: function() {
    return (
      <div className="well">
        <p>
          {(this.state && this.state.messages.length) ?
            this.state.messages[0]['name'] + ': '
            + this.state.messages[0]['message'] : ''}
        </p>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
