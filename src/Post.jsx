export default function Post({ post }) {
  const { title, body, id, userId, postId } = post;
  return (
    <div className="box">
      <h5>Title:{title} </h5>
      <p>
        <small>UserId: {userId}</small>
      </p>
      <p>
        <small>PostId:{postId}</small>
      </p>
      <p>Body:{body}</p>
    </div>
  );
}
