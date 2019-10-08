import React,{Component} from 'react'

import NavbarItem from './NavbarItem'

class NavbarNav extends Component {
  render() {
    return (
      <div className='col-6' id='navbarNav'>
        <ul className="navbar-nav mr-auto">
          <NavbarItem 
            to='/'
            title='All repositories' 
          />
          <NavbarItem 
            to='/create-repo'
            title='create repositories'
          />
        </ul>
      </div>  
    )
  }
}

export default NavbarNav
