import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"
import { slide as Menu } from 'react-burger-menu'
import './burger.css'

class Burger extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right customBurgerIcon={ <img src="/icon.svg" /> }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/">The Work</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
      </Menu>
    );
  }
}
export default Burger
