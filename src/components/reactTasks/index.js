import React from 'react'
import VideoComponent from './videoComponent'
import videoFiles from './videoFiles'

export default () => {
  return (

    <div>
      <VideoComponent vidData={videoFiles[0]} />
      <VideoComponent vidData={videoFiles[1]} />
      <VideoComponent vidData={videoFiles[2]} />
    </div>

  )
}
