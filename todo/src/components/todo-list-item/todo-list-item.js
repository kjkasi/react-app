import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  /*
  constructor() {
    super();
    this.state = {
      done: false
    };

    this.onLabelClick = () => {
      console.log(`Done: ${ this.props.label }`);
    };
  }
  */

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done})=> {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state)=> {
      return {
          important: !state.important
      };
    });
  };

  render() {

    const { label = false } = this.props;
    const { done, important } = this.state;

    let className = 'todo-list-item';
    if (done) {
      className += ' done';
    }

    if (important) {
      className += ' important';
    }

    /*
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
    */
  
    return (
      <span className={ className }>
        <span
          className="todo-list-item-label"
          //onClick={ () => console.log(`Done: ${label}`) }
          onClick={ this.onLabelClick }
          >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ this.onMarkImportant }>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};


