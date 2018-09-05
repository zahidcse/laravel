import _ from 'lodash';
import React, { Component } from 'react';
import { getPost,deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class PostShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }


      deletePostClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id,()=>{
          this.props.history.push('/');
        });
      }

      render() {
        const { post } = this.props;
        if(!post){
          return (<div>Loading... </div>);
        }
        return (

          <div>
            <div>
            <Link to="/">Back To Index</Link>
            </div>
            <div><button className="btn btn-danger pull-xs-right"
            onClick={this.deletePostClick.bind(this)}
            >Delete</button></div>
            <h3>{post.title}</h3>
            <h6>{post.categories}</h6>
            <p>{post.content}</p>
          </div>
        );

    }
}

function mapStateToProps({posts},ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{getPost,deletePost})(PostShow);
