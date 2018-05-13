import React, { Component } from 'react'

class TerminalHead extends Component {
  render() {
    return (
      <div className="terminal-head">
        <div className="terminal-head-actions">
          <button className="close"></button>
          <button className="minimize"></button>
          <button className="maximize"></button>
        </div>
        <p>
          alexdovzhanyn.sh
        </p>
      </div>
    )
  }
}

export default TerminalHead
