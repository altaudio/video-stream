import React from 'react'
import Hello from './hello'
import BigButton from './bigButton'
import VideoComponent from './videoComponent'

var video1 = {
          prevImage : "https://i.ytimg.com/vi/endP6hTviXE/hqdefault.jpg",
          userImage : "https://i.imgflip.com/2/6l71.jpg",
          vidLength : "3:45",
          vidTitle : "Top 15 Plastic Chairs enthusiasts would love to own",
          userName : "Terry Nutkins",
          views : "302",
          upDate : "5 weeks ago"
        } 

var video2 = {
          prevImage : "http://storage.torontosun.com/v1/dynamic_resize/sws_path/suns-prod-images/1297928846659_ORIGINAL.jpg?quality=80&size=420x",
          userImage : "https://yt3.ggpht.com/-vM8MrP-QMx8/AAAAAAAAAAI/AAAAAAAAAAA/Wrt5nv177QY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
          vidLength : "6:32",
          vidTitle : "I eat a picure of steven segal a day till he eats a picture of me",
          userName : "Segal Fan",
          views : "16k",
          upDate : "1 month ago"
        } 

var video3 = {
          prevImage : "http://www.notreble.com/buzz/wp-content/uploads/2014/08/jRHQPG1xd9o-600x315.jpg",
          userImage : "https://cdn.shopify.com/s/files/1/1571/4619/t/3/assets/logo.png?9299305422008581865",
          vidLength : "3:41",
          vidTitle : "VULFPECK /// 1612",
          userName : "Vulf",
          views : "2.3M",
          upDate : "2 years ago"
        } 



export default () => {
  return (

    <div>
      <VideoComponent vidData={video1} />
      <VideoComponent vidData={video2} />
      <VideoComponent vidData={video3} />
    </div>

  )
}
