import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fab fa-react"></i>
                <span>My Record</span>
                <span className="navbar-count">{this.props.totalCount}</span>

            </nav>
        );
    }
}

export default Navbar;