import React, {useState} from "react";
import './App.css';
import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post"

let id = 1; 

function App() {
  const [post, setPosts] = useState([]);
 
  //Add function Post
  function addPost(title) {
    const newPost = {id, title};
    setPosts([newPost, ...post]);
    id += 1;
  };

  function deletePost(id){
    const updatedPosts = post.filter((post)=>post.id!==id);
    setPosts(updatedPosts);
  };
  
  
  return (
    <div>
      <Navbar/>
      <Input addPost = {addPost}/>
      {post.map((post) => (
        <Post key = {post.id} id = {post.id} title = {post.title} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default App;
  

