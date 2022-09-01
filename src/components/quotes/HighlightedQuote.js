import classNamees from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classNamees.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
