import { Post } from "../Post/Post";
import { useSelector } from "react-redux";
import { getPostList } from "../../store/selectors";

export const PostRenderer = () => {
  const listOfPosts = useSelector(getPostList);

  return (
    <div>
      {listOfPosts.map((data) => (
        <Post title={data.title} description={data.description} key={data.id} />
      ))}
    </div>
  );
};
