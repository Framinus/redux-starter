import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
};

// this is the function that glues Redux and React together.
function mapStateToProps(state) {
  return {
    books: state.books
  };
};

// Anything returned from this function will end up as props on the booklist container.
function mapDispatchToProps(dispatch) {
  // whenever select book is called, the result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
