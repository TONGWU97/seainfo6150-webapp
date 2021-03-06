import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected: false,
            title:this.props.title,
            author:this.props.author,
            date:this.props.date,
            shortText:this.props.shortText
        };
    }

    onClick() {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {

        let selectedStatus;
        if (this.state.selected) {
            selectedStatus = 'Yes';
        } else {
            selectedStatus = 'No';
        }

        // paste this onClick handler into your checkbox;
        // you should not have to modify this code in any way
        // onClick={this.onClick.bind(this)}
        //
        return (
                <tr align="center">
                  <td align="left"> <input type="checkbox" onClick= {this.onClick.bind(this)}/> {this.props.title} </td>
                  <td> {selectedStatus} </td>
                  <td> <address><a rel={this.props.author} href= "/author"> {this.props.author} </a></address> </td>
                  <td> <time dateTime= {this.props.date}> {this.props.date} </time> </td>
                  <td> {this.props.shortText} </td>
                </tr> 
        );
    }

}

ArticleTableRow.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;