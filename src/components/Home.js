import React, { Fragment, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    // e.preventDefault();
    setText(e.target.value);
  }
  return (
    <Fragment>
      <h1>ToDo LIST</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul></ul>
    </Fragment>
  );
}

export default Home;
