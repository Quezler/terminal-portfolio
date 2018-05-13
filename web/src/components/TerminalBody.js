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
    switch(command) {
      case 'help':
        this.appendTerminalContent(`
          <br><br>
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin17)<br>
          These shell commands are defined internally.  Type 'help' to see this list.<br><br>
          <div style="width: 400px; display: inline-block;">
            <div style="width: 200px; display: inline-block; float: left;">
              COMMAND<br>
              ls
            </div>
            <div style="width: 200px; display: inline-block; float: left;">
              DESCRIPTION<br>
              List directory contents
            </div>
          </div>
        `)
      case 'ls':
        this.appendTerminalContent(`
          <br><br>
          <strong style="margin-right: 10px;">Projects</strong>
          <strong style="margin-right: 10px;">Portfolio</strong>
          <strong style="margin-right: 10px;">Blog</strong>
          <p style="display: inline-block;">about.txt<p>
        `)
        break
      case 'cat about.txt':
        this.appendTerminalContent(`
          <br><br>
          I'm a software engineer based in New York City with a passion for technology.
          I work mainly in the web development industry, but I love spending my free time
          exploring other forms/platforms for programming, whether it be embedded systems
          or game development. Here's some of what I've got under my belt: <br>
          <div style="width: 600px; display: inline-block">
            <div style="width: 150px; float: left">
              <p><strong>Languages</strong></p>
              <ul>
                <li>Ruby</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Elixir</li>
                <li>PHP</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
            <div style="width: 150px; float: left">
              <p><strong>Frameworks</strong></p>
              <ul>
                <li>Ruby on Rails</li>
                <li>Sinatra</li>
                <li>React</li>
                <li>AngularJS</li>
                <li>Sass</li>
                <li>Phoenix</li>
              </ul>
            </div>
            <div style="width: 150px; float: left">
              <p><strong>Database</strong></p>
              <ul>
                <li>MySQL</li>
                <li>PostgresQL</li>
                <li>MongoDB</li>
                <li>LevelDB</li>
              </ul>
            </div>
            <div style="width: 150px; float: left">
              <p><strong>Other</strong></p>
              <ul>
                <li>Wordpress</li>
                <li>Amazon Web Services</li>
                <li>Heroku</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        `)
        break
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
