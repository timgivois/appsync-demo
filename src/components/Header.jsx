import React from 'react'
import { func } from 'prop-types'

const ENTER = 13

class Header extends React.Component {
  state = {
    value: ''
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value })
  }

  onKeyDown = (event) => {
    const { value } = this.state
    const { onSubmit } = this.props

    if (event.keyCode === ENTER) {
  
      onSubmit(value)

      this.setState({
        value: ''
      })
    }
  }

  render () {
    const { value } = this.state

    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
          value={value}
        />
      </header>
    )
  }
}

Header.propTypes = {
  onSubmit: func.isRequired
}
export default Header
