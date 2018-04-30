import '../styles/style'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class MyComponent extends React.Component<any, any> {
  render() { return (
    <div className="bg">Hello World</div>
  )}
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))