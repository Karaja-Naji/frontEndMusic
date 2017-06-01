/*
 * RegisterPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import Form from '../Form.react';
import { sendingRequest, register } from '../../actions/AppActions';
import LoadingIndicator from '../LoadingIndicator.react';

export default class BlogsPage extends Component {
	render() {
		const dispatch = this.props.dispatch;
		//const { formState, currentlySending } = this.props.data;
    return (
		<div className="form-page__wrapper">
			<h1>Blogs Page</h1>
		</div>
	);
  }

}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(BlogsPage);
