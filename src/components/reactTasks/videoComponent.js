import React from 'react'

export default (props) => (
  <div>
    <div>
      <img src={props.vidData.prevImage} alt={props.vidData.vidTitle} height={'250px'} width={'500px'} />
      <div>
        <p>{props.vidData.vidLength}</p>
      </div>
    </div>

    <div>
      <img src={props.vidData.userImage} alt={props.vidData.vidTitle} height={'50px'} width={'50px'} />
    </div>

    <div>
      <p>{props.vidData.vidTitle}</p>
    </div>

    <div>
      <p>{props.vidData.userName} - {props.vidData.views} views - {props.vidData.upDate}</p>
    </div>

  </div>
)

