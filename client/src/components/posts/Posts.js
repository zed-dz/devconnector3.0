import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {

  const [Search, setSearch] = useState({
    search: ''
  });

  const { search } = Search;

  let filteredPosts = posts.filter(post => post.text.toLowerCase().indexOf(search.toLowerCase()) !== -1);

const updateSearch = event =>
      setSearch({ ...Search, search: event.target.value.substr(0, 100) });

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <p className='lead large text-primary text-center'>
        <i className='fa fa-user' /> Welcome to the community
      </p>

      <PostForm />
                      <div className="search__container">
                    <p className="search__title">
                        search posts
                    </p>
             <input type='text' onChange={updateSearch.bind(this)} value={search} className="search__input" placeholder="search posts" />
                </div>
              <div className='posts'>
                  {filteredPosts.map(post => (
                    <PostItem key={post._id} post={post} />
                  ))
                }
              </div>

      <div className='hidden'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
