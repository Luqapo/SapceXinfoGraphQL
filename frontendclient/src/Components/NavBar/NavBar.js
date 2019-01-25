import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

export function NavBar(props) {
    const url = props.history.location.pathname;
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className={classNames({
                'nav-item active': (url === '/launches'),
                'nav-item': !(url === '/launches')
            })}>
                <Link className="nav-link" to="/launches">Launches</Link>
            </li>
            <li className={classNames({
                'nav-item active': (url === '/missions'),
                'nav-item': !(url === '/missions')
            })}>
                <Link className="nav-link" to="/missions">Missions</Link>
            </li>
            <li className={classNames({
                'nav-item active': (url === '/rockets'),
                'nav-item': !(url === '/rockets')
            })}>
                <Link className="nav-link" to="/rockets">Rockets</Link>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default withRouter(NavBar);