import {Component} from 'react'

import './index.css'

// Debugs identified are
// 1. component is not destructured line-1
// 2. Component is not extended to the line-9
// 3. state id directly updated two times line-12, 17
// 4. count variable is not declared while destructuring line-24
// 5. functions are invoked to the buttons line-30, 33
// 6. event function are not assigned respective buttons line-30, 33

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    // this.state.count = this.state.count - 1;
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    // this.state.count = this.state.count + 1;
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
