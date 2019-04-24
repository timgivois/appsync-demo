import React from 'react'
import { number } from 'prop-types'

const Footer = ({ size }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{size}</strong>
      <span> </span>
      <span>items</span>
    </span>
  </footer>
)

Footer.propTypes = {
  size: number.isRequired
}
export default Footer
