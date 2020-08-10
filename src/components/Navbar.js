import React, {Component} from 'react';

class Navbar extends Component{


    render() {
        return(
            <div>
                <nav className="pl-5 mb-5 navbar navbar-light bg-light">
                    <a href="/" className="pl-4 navbar-brand">Where in the world?</a>
                </nav>
            </div>
        )
    }
}

export default Navbar;