import React from 'react'

export default function UserCard(props) {
    console.log(props);
  return (
    <div className="ui card">
        <div className="content">
            <div className="header">Alex Tancredi</div>
            <div className="description">
                {props.children}
            </div>
        </div>
        <div className="ui button bottom">
            <i className='add icon'>
                Add Friend
            </i>
        </div>
    </div>
  )
}
