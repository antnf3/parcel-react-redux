import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const QUERY = "QUERY";
const LOCALDB = "localDb";

const getLocalStorage = () => {
  const toDos = window.localStorage.getItem(LOCALDB);
  return (toDos && JSON.parse(toDos)) || [];
};
const handleLocalStorage = (todos) => {
  window.localStorage.setItem(LOCALDB, JSON.stringify(todos));
  return todos;
};

const queryToDo = () => {
  return {
    type: QUERY,
  };
};
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
const initialState = getLocalStorage();
const redux = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return handleLocalStorage([
        { text: action.text, id: Date.now() },
        ...state,
      ]);
    case DELETE:
      return handleLocalStorage(state.filter((toDo) => toDo.id !== action.id));
    default:
      return state;
  }
};
const store = createStore(redux);

export const actionCreators = {
  addToDo,
  deleteToDo,
  queryToDo,
};

export default store;
