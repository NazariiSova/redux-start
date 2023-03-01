import { createStore } from "redux";
import { SET_NEW_POST } from "./actions";

const fakeData = [
  {
    title: "Post 1",
    description: "some text about weather",
    id: 1,
  },
  {
    title: "Post 2",
    description: "some text about bicycle",
    id: 2,
  },
  {
    title: "Post 3",
    description: "some text about flowers",
    id: 3,
  },
];

export const initialState = {
  postList: fakeData,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_POST:
      return { ...state, postList: [action.payload, ...state.postList] };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
