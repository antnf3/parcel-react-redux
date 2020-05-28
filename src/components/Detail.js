import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <div>{toDo.text}</div>
      <div>created at {toDo.id}</div>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.filter((toDo) => toDo.id === parseInt(id, 10))[0] };
}

export default connect(mapStateToProps)(Detail);
