import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TerminalActions from '../actions/terminal-actions'
import TerminalHead from '../components/TerminalHead'
import TerminalBody from '../components/TerminalBody'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TerminalActions, dispatch)
}

class Terminal extends Component {
  componentDidMount() {
    this.refs.terminal.focus()
  }

  handleKeyPress = e => {
    this.props.userKeyPress(e.key)
  }

  render() {
    return (
      <div className="terminal-container" tabIndex={ 0 } onKeyDown={ this.handleKeyPress } ref='terminal'>
        <TerminalHead />
        <TerminalBody />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal)
