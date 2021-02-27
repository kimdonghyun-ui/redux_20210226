import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});
const mapDispatchToProps = (dispatch) => ({
  changeInput: (val) => {
    dispatch(changeInput(val));
  },
  insert: (val) => {
    dispatch(insert(val));
  },
  toggle: (val) => {
    dispatch(toggle(val));
  },
  remove: (val) => {
    dispatch(remove(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
