import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import Spiner from '../UI/Spiner/Spiner';

const LAUNCH_QUERY = gql`
query LaunchQuery($flight_number: Int!) {
  launch(flight_number: $flight_number) {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
        details
        links {
          video_link
          article_link
        }
        rocket {
          rocket_id
          rocket_name
          rocket_type
        }
    }
}
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
        {({ loading, error, data}) => {
              if(loading) return <Spiner />
              if(error) alert(error);
              const { 
                mission_name, 
                flight_number, 
                launch_year, 
                launch_success,
                details,
                links: {
                  video_link,
                  article_link
                }, 
                rocket: { rocket_id, rocket_name, rocket_type}
              } = data.launch;
              console.log(video_link.split('=')[1]);
              const filmUrl = video_link.split('=')[1];
              return ( 
              <div>
                <h2 className=" dislapy-4 my-3"><span className="text-dark">Mission: {mission_name}</span></h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Flight year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    Flight status: <span className={classNames({
                      'text-success': launch_success,
                      'text-danger': !launch_success
                    })}>{launch_success ? 'YES' : 'NO'}</span>
                  </li>
                </ul>
                <h4 className="my-3">Rocket details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Rocket id: {rocket_id}
                  </li>
                  <li className="list-group-item">
                    Rocket name: {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket type: {rocket_type}
                  </li>
                </ul>
                <p className="my-3 p-3 card">{details}</p>
                <iframe src={`https://youtube.com/embed/${filmUrl}`} title={mission_name} width="550" height="315" allowFullScreen/>
                <iframe src={article_link} title={mission_name} width="550" height="315" allowFullScreen/>
                <Link className="btn btn-primary" to="/">Back</Link>
              </div>
              )
            }}
        </Query>
      </Fragment>
    )
  }
};

export default withRouter(Launch);
