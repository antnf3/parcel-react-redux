import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { Link } from "react-router-dom";

function List({ toDo, delClick }) {
  return (
    <li id={toDo.id}>
      <Link to={`/${toDo.id}`}>{toDo.text}</Link>
      <button onClick={delClick}>del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.toDo.id;
  return {
    delClick: () => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(null, mapDispatchToProps)(List);
