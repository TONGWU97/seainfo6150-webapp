import React from 'react';
import PropTypes from 'prop-types';
import './ArticleListItem.module.css';

class ArticleListItem extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            shortText: this.props.shortText,
            year: this.props.year
        }
    }

    render() {
        return(
            <div group="boxgroup">
            <ul>
                <li> <h4> {this.props.title} </h4> </li>
                <li> <p> {this.props.shortText} </p> </li>
                <li> <a rel="{this.props.author}" href="/author"> By: {this.props.author} </a> </li>
                <li> <time dateTime={this.props.date}> {this.props.date} </time> </li>
            </ul>
            </div>
        );
    }
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default ArticleListItem;