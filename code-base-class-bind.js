"use strict"
// ES6
class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

class ExampleComponent extends BaseComponent {
 constructor() {
  super();
  this._bind('_handleClick', '_handleFoo');
 }
 _handleClick() {}
 _handleFoo() {}
}
