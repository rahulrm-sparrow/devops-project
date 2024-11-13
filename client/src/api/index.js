import axios from 'axios';

// const url = 'http://backend-service:5000/posts';
// const url = 'http://backend-service.default.svc.cluster.local'
// const url = 'http://localhost/posts'
const url = 'http://localhost:5000/posts'
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
