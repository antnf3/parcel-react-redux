import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  console.log(toDos);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <Fragment>
      <h1>ToDo LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul></ul>
    </Fragment>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
