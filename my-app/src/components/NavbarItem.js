import React from 'react';

function NavbarItem (){
    return (
        <li className={className}>
          { props.children }
        </li>
      )
    
}

export default NavbarItem