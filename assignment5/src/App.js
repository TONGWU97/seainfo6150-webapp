import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList.js'; 
import articles from './data/articles.json';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ArticleList articles={articles} />
        <Footer/>
      </div>
    );
  }
}

export default App;
