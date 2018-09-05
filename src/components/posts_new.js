import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';
class PostNew extends Component {

  returnField(field){
    const {meta:{touched,error}} = field;
    const className = `${touched && error ? ' has-danger':''}`;
    return(
      <div className={className}>
      <label>{field.label}</label>
      <input type="text" className="form-control" {...field.input} />
      <div className="text-help">
            {touched?error:''}
      </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values,()=>{
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-control" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Post Title" component={this.returnField} />
        <Field name="categories" label="Category" component={this.returnField} />
        <Field name="content" label="Content" component={this.returnField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title= "Enter a title";
  }

  if(!values.category){
    errors.category= "Enter a category";
  }

  if(!values.content){
    errors.content= "Enter a content";
  }
  return errors;
}

export default reduxForm({
  validate,
  form:'postsNewForm'
})(
  connect(null,{createPost})(PostNew));
