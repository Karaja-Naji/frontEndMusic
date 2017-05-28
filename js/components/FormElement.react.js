/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
//const assign = Object.assign || require('object.assign');

class FormInput extends Component {
  render() {
    return(
        
        <div className="form__field-wrapper">
          <input className="form__field-input" type={this.props.type} id={this.props.id} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}  />
          <label className="form__field-label" htmlFor={this.props.id}>{this.props.label}</label>
        </div>

    );
  }
 
}


export default FormInput;
