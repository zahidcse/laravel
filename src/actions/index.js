import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';
export function fetchPosts(){
  const REQUEST = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type:FETCH_POSTS,
    payload:REQUEST
  }
}
export function createPost(values,callback){
  const REQUEST = axios.post(`${ROOT_URL}/posts${API_KEY}`,values).then(()=>callback());
  return{
    type:CREATE_POST,
    payload:REQUEST
  }
}

export function getPost(id){
  const REQUEST = axios.get(`${ROOT_URL}/posts/${id}`);
  return{
    type:FETCH_POST,
    payload:REQUEST
  }
}

export function deletePost(id,callback){
  const REQUEST = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(()=>callback());
  return{
    type:DELETE_POST,
    payload:id
  }
}
