export const SET_NEW_POST = "SET_NEW_POST";
export const UPDATE_POSTS = "UPDATE_POSTS";

export const setNewPost = (data) => ({
  type: SET_NEW_POST,
  payload: data,
});

export const updatePosts = (list) => {
  return {
    type: UPDATE_POSTS,
    payload: list,
  };
};
