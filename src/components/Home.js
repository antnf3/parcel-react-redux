import React, { Fragment, useState, useRef } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import List from "./List";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
    inputRef.current.focus();
  }
  return (
    <Fragment>
      <h1>ToDo LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <List key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </Fragment>
  );
}

function mapStateToProps(state) {
  // console.log(state);
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
