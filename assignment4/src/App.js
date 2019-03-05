import React, { Component } from 'react';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleTable articles={articles} />
      </div>
    );
  }
}

export default App;
