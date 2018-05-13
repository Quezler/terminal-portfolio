import React, { Component } from 'react'
import UserInput from './UserInput'

class TerminalBody extends Component {
  state = {
    content: '',
    userInput: '',
    showInput: false
  }

  componentDidMount() {
    let content = " Hello, welcome to my website. this is some content. wow, much fun, so cool! Enter a command below. Now the command is longer. lets see what happens!"
    this.printType(content.split(''))
  }

  updateTerminalContent = content => this.setState({ content })
  appendTerminalContent = content => {
    this.setState({ content: this.state.content + content }, () => {
      this.refs.content.scroll(0, this.refs.content.scrollHeight)
    })
  }
  updateWithUserContent = (val, callback) => {
    this.setState({ content: `${this.state.content} <br> ${val}` }, callback)
  }

  printType = ([val, ...rest]) => {
    this.updateTerminalContent(this.state.content + val)

    if (rest.length) {
      setTimeout(() => this.printType(rest), 50)
    } else {
      this.setState({showInput: true})
    }
  }

  handleUserCommand = command => {
    switch (command) {
      case "help":
        this.appendTerminalContent(`
          <br/><br/>
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin17)<br/>
          These shell commands are defined internally.  Type 'help' to see this list.<br/><br/>
          <div style="width: 400px; display: inline-block;">
            <div style="width: 200px; display: inline-block; float: left;">
              COMMAND<br/>
              ls
            </div>
            <div style="width: 200px; display: inline-block; float: left;">
              DESCRIPTION<br/>
              List directory contents
            </div>
          </div>
        `)
        break;
      default:
        this.appendTerminalContent(`<br><br>${command}: command not found. Try typing 'help' to get a list of commands.`)
    }
  }

  render() {
    return (
      <div className="terminal-content" ref='content'>
        <div className="results" dangerouslySetInnerHTML={{__html: this.state.content}}></div>

        { this.state.showInput ?
          <UserInput
            updateTerminalContent={ this.updateWithUserContent }
            handleUserCommand={ this.handleUserCommand }
          />
          : null
        }
      </div>
    )
  }
}

export default TerminalBody
