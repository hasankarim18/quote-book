import classNamees from './Card.module.css';

const Card = (props) => {
  return <div className={classNamees.card}>{props.children}</div>;
};

export default Card;
