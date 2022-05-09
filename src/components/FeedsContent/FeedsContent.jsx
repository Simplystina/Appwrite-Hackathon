import React from 'react'
import './FeedsContent.css'
import {AiOutlinePicture} from 'react-icons/ai'
import {FaPaperPlane} from 'react-icons/fa'
import './NewPost'
import NewPost from './NewPost'

const FeedsContent = () => {
  return (
    <div className='feeds-container'>
        <form className='feeds-form'>
            <input type='text' id='experience' name='experience' 
             placeholder='Share your experiene........'
            />
            <div className='feeds-icons-container'>
              <AiOutlinePicture className='feed-icon'/>
              <FaPaperPlane className='feed-icon'/>
            </div>
        </form>
        <NewPost/> 
    </div>
  )
}

export default FeedsContent
