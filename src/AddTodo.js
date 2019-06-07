import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/addTodo';

class AddTodo extends Component {

  todoInput = React.createRef();
  formRef = React.createRef()

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.todoInput.current.value, "input's value")
    this.props.onAddTodo(this.todoInput.current.value)
    this.formRef.current.reset()
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">

        {this.props.data.isLoading ? <h3>Loading...</h3> : <form onSubmit={this.onSubmit} ref={this.formRef} className="form">
          <input type='text' placeholder="Add Todo" ref={this.todoInput} />
          <button onClick={this.onSubmit} className="button">Add todo</button>
        </form>}
        {this.props.data.error &&
          <h3 className="error">{this.props.data.error}</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.todoReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);