import React from 'react'

class DigitalClicker extends React.Component{

  state = {
    timesClicked: 0
  }
  clickEvent = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render(){
    return(
    <div>
    <button onClick= {this.clickEvent}  >{this.state.timesClicked}</button>
    </div>
    )
  }
}

export default DigitalClicker// Code DigitalClicker Component Here
