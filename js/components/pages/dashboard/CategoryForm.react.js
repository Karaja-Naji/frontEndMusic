
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from './../../FormElement.react'
import { addCategory } from './../../../actions/CategoryAction'


class CategoryForm extends Component {
  constructor(){
    super();
    this.state={
      categoryTitle:""
    }
    this.changeCategoryTitle = this.changeCategoryTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  render() {
    return(
      <form className="form" onSubmit={this.onSubmit.bind(this)}>

        <FormInput type={"text"} id={"categoryTitle"}  value={this.categoryTitle} placeholder="wood" onChange={this.changeCategoryTitle} label={"Category Title"}/>
        <button onClick={this.onSubmit}>Add Category</button>
      </form>
    );
  }

  // Change the categoryTitle in the app state
  changeCategoryTitle(evt) {
    this.setState({categoryTitle:evt.target.value});
    console.log("changeCategoryTitle xx");
  }


  // onSubmit call the passed onSubmit function
  onSubmit(evt) {
    evt.preventDefault();
    console.log("onSubmit xx", this.state.categoryTitle);
    this.props.dispatch(addCategory( this.state.categoryTitle ));
  }
}

// Which props do we want to inject, given the global state
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(CategoryForm);

