import classNamees from './CommentItem.module.css';

const CommentItem = (props) => {
  return (
    <li className={classNamees.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
