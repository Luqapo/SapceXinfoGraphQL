import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Spiner from '../UI/Spiner/Spiner';
import LaunchItem from '../LauchItem/LaunchItem';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
  launches {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
    }
}
`;

export class Lunches extends Component {
  render() {
    return (
      <Fragment>
          <h2 className="diplay-4 my-3">Launches</h2>
          <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data}) => {
              if(loading) return <div className="text-center"><Spiner /></div>
              if(error) alert(error);
              return data.launches.map(launch => <LaunchItem launch={launch} key={launch.flight_number} />);
            }
          }
          </Query>
      </Fragment>
    )
  }
}

export default Lunches
