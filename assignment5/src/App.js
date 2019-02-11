import React, { Component } from 'react';
// import Text from './Text';
// import ArticleTable from './ArticleTable';
import ArticleList from './ArticleList/ArticleList.js'; 
import articles from './data/articles.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
