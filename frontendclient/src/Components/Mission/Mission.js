import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export function Mission(props) {

    const { mission_id, mission_name, manufacturers, payload_ids, description } = props.mission;
    
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
            <h4>
                <span>Mission name: {mission_name} </span>
            </h4>
            <ul className="list-group">
                  <li className="list-group-item">
                    Mission id: {mission_id}
                  </li>
                  <li className="list-group-item">
                    Rocket type: {manufacturers}
                  </li>
                  <li className="list-group-item">
                    First flight: {payload_ids}
                  </li>
                </ul>
                <p>{description}</p>
            
        </div>
        <div className="col-md-3">
            <Link to="/" className="btn btn-info">Back</Link>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Mission);