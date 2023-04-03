import React from 'react';
import Profile1 from './image/p1face.jpg';

const SingleComment = () => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={Profile1} alt="profile photo" />
            </a>
            <div className="content">
                <a href="/" className='author'>
                    Sarah
                </a>
                <div className='metadata'>
                    <span className='date'>
                        Today at 5:00PM
                    </span>
                </div>
                <div className='text'>
                    It's amazing
                </div>
            </div>
        </div>
    )
}

export default SingleComment;