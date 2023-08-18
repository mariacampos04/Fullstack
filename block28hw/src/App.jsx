import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Home from './components/Home.jsx';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to = "/blue">blue</Link>
        <Link to = "/red">red</Link>
        <Link to = "/home">home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path = "/blue" element = {<Blue/>}/>
          <Route path = "/red" element = {<Red/>}/>
          <Route path = "/home" element = {<Home/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App


//STRANGER'S THINGS CODE

// export default function Posts() {
 
  
//     const postContainer = document.getElementById("all-posts-container");
//     const cohortName = "2302-ACC-CT-WEB-PT-B"
//     const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;
    
    
    
//     const fetchPosts = async() =>{
//       try{
//         const response = await fetch ("https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/posts");
//         const result = await response.json();

//         return(
//           <div className = "posts">
//             result.data.posts;
//           </div>);
//       }
//       catch(err){
//         console.error('Uh oh, trouble fetching posts!')
//       }
//     };
    
    
//     const renderPosts = (postList) =>{
//       try{
//         const posts = fetchPosts();
//         posts.innerHTML = '';
//         postList.forEach((post) => {
    
//           const postElement = document.createElement('div')
//           postElement.classList.add('post');
    
//           postElement.innerHTML = `
//           <h2>${post.title}</h2>
//           <p> Description: ${post.description}</p>
//           <p> Price: ${post.price}</p>
//           <p> Created on: ${post.createdAt}</p>
//           <p> Updated on: ${post.updatedAt}</p>
//           <p> Author: ${post.isAuthor}</p>
//           <p> Location: ${post.location}</p>
//           <p> Delivery: ${post.willDeliver}</p>
//           <p> Message: ${post.messages}</p>
//         `;
//         postContainer.appendChild(postElement);
//       });
//       }
    
//       catch(err){
//         console.error("Uh oh, trouble rendering posts!");
//       }
//     };
    
//     //initiate the function
//     const init = async () => {
//       try {
//           const posts = await fetchPosts();
//           renderPosts(posts);
//       } catch (error) {
//           console.log("Error", error);
//       }
//     }
    
//     init();
    
// }