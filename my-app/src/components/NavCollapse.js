import React from 'react'

function NavCollapse (props) {

    return(
        <div
            id={props.id}
            className="collapse navbar-collapse"
         >
            { props.children }
         </div>
    )
}

export default NavCollapse