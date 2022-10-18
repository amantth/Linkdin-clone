import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./Widget.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar } from '@mui/material';
function Widget() {

    const newsFollowers = ( name, description,button )=> (
        <div className="followrs1">
            <div className='followrs'>
            <Avatar />
            <div className="info">
                <h4>{name}</h4>
                <p className='p'>{description}</p>
                </div>
                
       </div>
                <div>
                <button className='btn'>Follow</button></div>
                
                </div>
    )

    return (
     
      <div className='widgets'>
          
          <div className="widget__header">
              <h2>Add to your feed</h2>
              <InfoIcon />
           </div>
            {newsFollowers("Amanuel tarekegn", "software engenerin")}
            {newsFollowers("Leul Tarkegn", "Bussines man")}
              {newsFollowers("Robel Tarkegn","Bussines man")}
        </div>
   
        
        
          
            
  )
}

export default Widget
