import React from "react";
import Header from './Header'
import About from "./About"
import blog from "../data/blog"
import ArticleList from "./ArticleList";

function App() {
  return (
    <>
    <Header title={blog.name}/>
    <About 
    img={blog.image}
    text={blog.about}
    />
    <ArticleList 
    posts={blog.posts}
    />
    </>
   
  );
}

export default App;
