import '../styles/style'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AnalogClock} from './AnalogClock'

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props)
    this.startClock()
    this.state = {
      currentTime : new Date()
    }
  }
  startClock() {
    setInterval(() => {
      console.log("updating time")
      this.setState({
        currentTime: new Date()
      })
    }, 1000)
  }
  render() { return (
    <AnalogClock currentTime={this.state.currentTime} />
  )}
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))

interface MyComponentState {
  currentTime: Date
}

interface MyComponentProps {
}