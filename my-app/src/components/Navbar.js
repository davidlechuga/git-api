import React, {Component} from 'react'

import NavLogo from './NavLogo';
import NavCollapse from './NavCollapse';
import NavbarNav from './NavbarNav';
import NavbarItem from './NavbarItem';



class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
          }
    }

    render () {
        return(
            <nav className="navbar navbar-expand-lg">
                <NavLogo 
                    to="/"
                />

                <NavCollapse >
                    <NavbarNav>
                    </NavbarNav>
                </NavCollapse>
                
            </nav>
        )
    }
}

export default Navbar