import React, {Component} from 'react';

import Navbar from '../components/Navbar';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          repositories: []
        }
      }


    render(){
        return (
            <Navbar  
            />
        )
    }
}

export default HomePage