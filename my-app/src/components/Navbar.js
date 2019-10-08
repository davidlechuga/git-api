import React, {Component} from 'react'

import NavLogo from './NavLogo';
import NavbarNav from './NavbarNav';



class Navbar extends Component {

    render () {
        return(
            <div className='container'>
                <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <NavLogo 
                        to='/'
                    />
                    <NavbarNav
                    />
                </nav>
                </div>
            </div>    
        )
    }
}

export default Navbar