import React from "react";
import blogData from "../data/blog";
import Container from "./Container";
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Blog-name"/>
      <About about="Personal blog by me. I explain with words and code" />
      <ArticleList />
    </div>
  );
}

export default App;
