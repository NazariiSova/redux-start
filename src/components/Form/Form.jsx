import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewPost } from "../../store/actions";

export const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    // TODO: rewrite as switch case
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handlerSubmit = (event) => {
    // TODO: implement submit fuc with button 'Enter' without eventListeners

    event.preventDefault();

    console.log("Add");
    console.log("title  " + title);
    console.log("description  " + description);

    const data = {
      title: title,
      description: description,
      id: new Date().getTime(),
    };

    dispatch(setNewPost(data));
  };

  const handlerSort = () => {
    // TODO: sort Posts by asc & desc
    // sort by  post title
  };

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

      <button className="button" onClick={handlerSubmit}>
        Add new
      </button>

      <button className="button" type="button" onClick={handlerSort}>
        Sort ↑↓
      </button>
    </form>
  );
};
