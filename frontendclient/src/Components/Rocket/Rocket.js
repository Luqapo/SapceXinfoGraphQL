import React from 'react';

export function Rocket(props) {

    const { rocket_id, rocket_name, rocket_type, first_flight } = props.rocket;
    
  return (
    <div className="card card-body border-primary mb-3">
      <div className="row">
        <div className="col-md-12">
            <h4>
                <span>Rocket name: {rocket_name} </span>
            </h4>
            <ul className="list-group">
                  <li className="list-group-item">
                    Rocket id: {rocket_id}
                  </li>
                  <li className="list-group-item">
                    Rocket type: {rocket_type}
                  </li>
                  <li className="list-group-item">
                    First flight: {first_flight}
                  </li>
                </ul>
            
        </div>
      </div>
    </div>
  )
};

export default Rocket;