import React from 'react';
import './Article.css';

const Article = (props) => ( 
    <div>
        <h1 className="headline"> { props.title } </h1> 
        <a rel={props.author} href="/author">{ props.author }</a>
        <br/>
        <time dateTime="2018-11-22"> { props.date } </time> 
        <hr/>
        <article> { props.children } </article> 
    </div>
);

export default Article;