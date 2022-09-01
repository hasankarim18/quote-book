import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom'

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classNamees from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true)
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }



  return (
    <Fragment>
      <Prompt when={isEntering} message="Are you sure??? All your data will be lost if you leave!!!" />
      <Card>
        <form onFocus={formFocusedHandler} className={classNamees.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classNamees.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classNamees.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classNamees.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classNamees.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment >
  );
};

export default QuoteForm;
