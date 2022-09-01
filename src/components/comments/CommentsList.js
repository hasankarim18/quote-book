import CommentItem from './CommentItem';
import classNamees from './CommentsList.module.css';

const CommentsList = (props) => {
  return (
    <ul className={classNamees.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
