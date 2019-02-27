import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css'

class ArticleImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            title: this.props.title
        }
    }

    render() {
        return (
            <div>
                <img className={styles.imagebox} src={this.state.url} alt={this.state.title} title={this.state.title}/>
            </div>
        );
    }
}

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default ArticleImage;