import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import '../layout/theme.css';
import { useTheme } from "../../ThemeContext";

const PostItem = ({
addLike,
removeLike,
deletePost,
auth,
  post: { _id, text, name, user, avatar, likes, comments, date },
  showActions
}) => {
  const themeState = useTheme();

  return (
  <Fragment>
      <div className='theme'>
    <h4>Pick a Theme</h4>
   <ul className="sidebar">
      <li>
    <a href='posts/5d0fc8c7a9f91732743357d0' >web design</a>
      </li>
      <li>
        <Link to='posts/5d0fc72ef9de970a246d6837'>
          Web Dev
        </Link>
      </li>
      <li>
        <a href='posts/5d0fc742f9de970a246d6838'>
          Job Search
        </a>
      </li>
      <li>
        <a href='posts/5d0fc8d0a9f91732743357d1'>
          Quiz
        </a>
      </li>
      <li>
        <a href='posts/5d0fc9b2a9f91732743357d5'>
          Coding test
        </a>
      </li>
    </ul>
   </div>


  <div className={`post p-1 my-1 ${themeState.dark ? 'bg-dark' : 'bg-white'}`}>
    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={e => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fa fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={e => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fa fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            comment{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {/* <a href={`mailto:${email}`} className='btn btn-primary'>email</a> */}
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fa fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
  </Fragment>
);
  }
PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
