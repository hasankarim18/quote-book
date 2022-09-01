import { useState, useEffect, useCallback } from 'react';

import classNamees from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams

  const { sendRequest, status, data: laodedComments } = useHttp(getAllComments)

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { quoteId } = params

  useEffect(() => {
    sendRequest(params.quoteId)
  }, [quoteId, sendRequest])

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let commets;
  if (status === 'pending') {
    commets = <div className="centered"><LoadingSpinner /> </div>
  }
  if (status === 'completed' && (laodedComments && laodedComments.length > 0)) {
    commets = <CommentsList comments={laodedComments} />
  }

  if (status === 'completed' && (!laodedComments && laodedComments.length === 0)) {
    commets = <p className="centered">No comments were added yet!</p>
  }

  return (
    <section className={classNamees.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {commets}
    </section>
  );
};

export default Comments;
