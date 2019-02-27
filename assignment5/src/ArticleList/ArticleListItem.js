import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage.js';

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            shortText: this.props.shortText,
            year: this.props.year,
            url: this.props.url
        }
    }

    render() {
        return (
            <div>
                <div className={styles.boxgroup} id={styles.bgcolor}>
                    <div className={styles.image}>
                        <ArticleImage url={this.state.url} title={this.state.title} />
                    </div>
                    <div className={styles.contentbox}>
                        <div>
                            <h4 className={styles.title}> {this.props.title} </h4>
                            <p className={styles.shortText}> {this.props.shortText} </p>
                        </div>
                    </div>
                    <div className={styles.author_time}>
                        <address className={styles.author}> By: {this.props.author} </address>
                        <time dateTime={this.props.date}> {this.props.date} </time>
                    </div>
                </div>
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