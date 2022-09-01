import classNamees from './QuoteItem.module.css';
import { Link } from 'react-router-dom';
const QuoteItem = (props) => {

  return (
    <li className={classNamees.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
