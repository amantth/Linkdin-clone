import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';


function Post({name,description,message,photourl}) {
  return (
      <div className='post'>
          <div className="postheader">
              <Avatar />
              <div className="post__info">
                  <h2>{ name}</h2>
                  <p>{description}</p>
              </div>
              
          </div>
          <div className="post__body">
        {message}
          </div>
          <div className="post__image">
              {photourl}
          </div>
          <div className="post__buttons">
              <InputOption Icon={ThumbUpIcon} />
              <InputOption Icon={CommentIcon} />
              <InputOption Icon={ShareIcon} />
              <InputOption Icon={MoreHorizIcon} />
          </div>
           
    </div>
  )
}

export default Post
