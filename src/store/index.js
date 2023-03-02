import { createStore } from "redux";
import { SET_ALL_POSTS, SET_NEW_POST, UPDATE_POSTS } from "./actions";

const fakeData = [
  {
    title: "Post 1",
    description: "some text about weather",
    id: 1,
  },

  {
    title: "Rost 3",
    description: "some text about flowers",
    id: 3,
  },
  {
    title: "Aost 2",
    description: "some text about bicycle",
    id: 2,
  },
];

export const initialState = {
  postList: fakeData,
  name: "my name",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_POST:
      return { ...state, postList: [action.payload, ...state.postList] };

    case UPDATE_POSTS:
      return { ...state, postList: action.payload };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
