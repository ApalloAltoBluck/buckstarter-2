import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"
import { slide as Menu } from 'react-burger-menu'
import './burger.css'


import fullpage_api from '@fullpage/react-fullpage';

class Burger extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        <Menu right customBurgerIcon={ <img src="/icon.svg" /> }>
          <a id="home"className="menu-item" href="" onClick={() => this.fullpageApi.moveTo(1, 0)}>Home</a>
          <a id="about" className="menu-item" href="" onClick={() => this.fullpageApi.moveTo(2, 0)}>The Work</a>
          <a id="contact" className="menu-item" href="" onClick={() => this.fullpageApi.moveTo(7, 0)}>Contact</a>


        </Menu>
      );
    }
  }



export default Burger



// const Burger = (props) => {
//   return (
//     <div>
//         <div class="wrapper">Burger</div>
//       <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Services</li>
//         <li>The Work</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   )
// }

// export default Burger
