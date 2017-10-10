import React from 'react'
class YouTubeDebugger extends React.Component{

  state = {
    errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
  }
  clickEvent1 = (event) => {
    this.setState({
      settings:{
      ...this.state.settings,
      bitrate: 12
    }
    })
  }
  clickEvent2 = (event) => {
    this.setState({
      settings:{
      ...this.state.settings,
    video: {
      ...this.state.video,
      resolution: '720p'
    }
  }
})
}
  render(){
    return(
    <div>
    <button className="bitrate" onClick= {this.clickEvent1}  ></button>
    <button className="resolution" onClick= {this.clickEvent2}  ></button>
    </div>
    )
  }
}

export default YouTubeDebugger
