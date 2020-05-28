import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

function List({ toDo, delClick }) {
  return (
    <li id={toDo.id}>
      {toDo.text}
      <button onClick={delClick}>del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log();
  const id = ownProps.toDo.id;
  return {
    delClick: () => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(null, mapDispatchToProps)(List);
