import * as React from 'react'
import '../styles/style'

export class AnalogClock extends React.Component<AnalogClockProps, AnalogClockState> {
  constructor(props: AnalogClockProps) {
    super(props)
  }
  render() {
    let secondsTransform = {
      transform: 'rotate(' + ((this.props.currentTime.getSeconds() * 6) - 90).toString() + 'deg)'
    }
    let minuteAngle = (this.props.currentTime.getMinutes() * 6) + (this.props.currentTime.getSeconds() / 60)
    let minutesTransform = {
      transform: 'rotate(' + (minuteAngle - 90).toString() + 'deg)'
    }
    let hoursAngle = (this.props.currentTime.getHours() * 30) + (this.props.currentTime.getMinutes() / 2)
    let hoursTransform = {
      transform: 'rotate(' + (hoursAngle - 90).toString() + 'deg)'
    }    
    return (
      <div className="dial-style">
        <div className="second-hand-style" style={secondsTransform} />
        <div className="minute-hand-style" style={minutesTransform} />
        <div className="hour-hand-style" style={hoursTransform} />
      </div>
    )
  }
}

interface AnalogClockState {}
interface AnalogClockProps {
  currentTime: Date
}