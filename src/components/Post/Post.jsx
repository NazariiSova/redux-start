export const Post = ({ title, description }) => {
  return (
    <div className="box">
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
