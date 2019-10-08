import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavbarItem  extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      to: '/'
    }
  }
   render() {
    return (
  
      <li className= 'nav-item active' >
        <Link className='nav-link' 
        to={this.props.to}>
        {this.props.title}
        </Link>
      </li>
    )
   }
}

export default NavbarItem