import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimtAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectPostById } from './postsSlice'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post}></ReactionButtons>
        <Link to={`/editpost/${post.id}`} className="button">
          Edit post
        </Link>
      </article>
    </section>
  )
}
