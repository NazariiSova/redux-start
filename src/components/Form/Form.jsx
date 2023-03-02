import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewPost, updatePosts } from "../../store/actions";

import { useSelector } from "react-redux";
import { getPostList } from "../../store/selectors";

export const Form = () => {
  const dispatch = useDispatch();
  const listOfPosts = useSelector(getPostList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
    }

    // TODO: rewrite as switch case
    // done
  };

  const handlerSubmit = (event) => {
    // TODO: implement submit fuc with button 'Enter' without eventListeners
    // done

    console.log(event.key);

    if (title.length >= 1 && description.length >= 1) {
      event.preventDefault();

      const data = {
        title: title,
        description: description,
        id: new Date().getTime(),
      };

      dispatch(setNewPost(data));
    }
  };

  // const handlerSort = (state = initialState, action) => {
  // switch (action.type) {
  //   case "SORT_OBJECT_BY_TITLE":
  //     return {
  //       ...state,
  //       listOfPosts: [...state.listOfPosts].sort((a, b) =>
  //         a.title.localeCompare(b.title)
  //       ),
  //     };
  //   default:
  //     return state;
  // }
  // };

  const handlerSort = () => {
    listOfPosts.sort((a, b) => a.title.localeCompare(b.title));

    const sortedPosts = [...listOfPosts];

    dispatch(updatePosts(sortedPosts));
  };

  // TODO: sort Posts by asc & desc
  // sort by  post title

  return (
    <form className="box">
      <label className="subtitle">
        Title
        <input
          className="input"
          name="title"
          onChange={handlerChange}
          value={title}
        />
      </label>

      <label className="subtitle">
        Description
        <input
          className="input"
          name="description"
          onChange={handlerChange}
          value={description}
        />
      </label>

      <button
        className="button"
        onClick={handlerSubmit}
        onKeyDown={handlerSubmit}
        type="submit"
      >
        Add new post
      </button>

      <button className="button" type="button" onClick={handlerSort}>
        Sort ↑↓
      </button>
    </form>
  );
};
