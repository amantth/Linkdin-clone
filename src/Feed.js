import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';

import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { Avatar } from '@mui/material';
// import { db } from './firebase';




function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    
     
  })

  function sendPost(e) {
    e.preventDefault();


  }
  // const sendPost = (e) => {
  // }

  return (
    <div className='feed'>
      <div className="feed__inputconatiner">
        <div className="feedinput__in">
        <Avatar />
              <div className="feed__input">
                  
                  <form>
                      <input placeholder='Have a topic that exist? post about it' type="text" />
                       <button onClick={sendPost} type="submit">Send</button>
                   
                  </form>
              </div>
              </div>
              <div className="feed__inputOption">
                  <InputOption color="#7085f9" Icon={ImageIcon} name="Photos" />
                  <InputOption color="#E7A33E"  Icon={SubscriptionsIcon} name="Video" />
                  <InputOption color="#C0CBCD"  Icon={EventIcon} name="Event" />
                  <InputOption color="7EC15E"  Icon={ArticleIcon} name="Write article" />

              </div>
      </div>
      {post.map((post) => {
        setPost()
      })}
      <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
      <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
      <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
      <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
    <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
      <Post name={"Amanuel Tarekegn"}
        description={"Software Enginer"}
        message={"am starting a new position in ministry fo agriculture afkajsdlfakjdlfalsjfdlasjdfalsdkfj"} />
    </div>
  )
}

export default Feed
