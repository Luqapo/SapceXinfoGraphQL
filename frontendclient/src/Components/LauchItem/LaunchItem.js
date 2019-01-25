import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link, withRouter } from 'react-router-dom';

export function LaunchItem(props) {

    const { flight_number, mission_name, launch_date_local, launch_success } = props.launch;
    
  return (
    <div className="card card-body border-primary mb-3">
      <div className="row">
        <div className="col-md-9">
            <h4>
                <span>Nr: {flight_number} - 
                </span>Mission: 
                <span className={classNames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                    })}>
                    {mission_name}
                </span>
            </h4>
            <p>Launch date: 
                <Moment format="YYYY-MM-DD HH:MM">{launch_date_local}</Moment>
            </p>
        </div>
        <div className="col-md-3">
            <Link to={`/launch/${flight_number}`} className="btn btn-info">Details</Link>
        </div>
      </div>
    </div>
  )
};

export default withRouter(LaunchItem);