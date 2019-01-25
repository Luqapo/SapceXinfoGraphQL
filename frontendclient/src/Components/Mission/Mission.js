import React from 'react';

export function Mission(props) {

    const { mission_id, mission_name, manufacturers, payload_ids, description } = props.mission;
    
  return (
    <div className="card card-body border-primary mb-3">
      <div className="row">
        <div className="col-md-12">
            <h4>
                Mission name: <span className="text-danger">{mission_name}</span>
            </h4>
            <ul className="list-group">
                  <li className="list-group-item">
                    Mission id: {mission_id}
                  </li>
                  <li className="list-group-item my-2">
                    <h5>Manufacturers: </h5>
                    <ul className="list-group"> {manufacturers.map(manufacturer => (
                      <li className="list-group-item my-1" key={manufacturer}>{manufacturer}</li>)
                      )}
                      </ul>
                  </li>
                  <li className="list-group-item my-2">
                    <h5>Payload:</h5>
                      <ul className="list-group"> {payload_ids.map(payload => (
                      <li className="list-group-item my-1" key={payload}>{payload}</li>)
                      )}
                      </ul>
                  </li>
                </ul>
                <p className="text-info p-3">{description}</p>
        </div>
      </div>
    </div>
  )
};

export default Mission;