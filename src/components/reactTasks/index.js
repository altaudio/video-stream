import React from 'react'
import VideoComponent from './videoComponent'
import videoFiles from './videoFiles'

export default () => {
  return (

    <div>
      {_.map(videoFiles, (file) => { return <VideoComponent vidData={file} /> })}
    </div>

  )
}
