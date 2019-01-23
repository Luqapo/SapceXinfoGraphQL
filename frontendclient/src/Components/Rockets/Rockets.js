import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Spiner from '../UI/Spiner/Spiner';
import Rocket from '../Rocket/Rocket';

const ROCKETS_QUERY = gql`
query LaunchesQuery {
  rockets {
    rocket_id
    rocket_name
    rocket_type
    first_flight
    }
}
`;

export class Lunches extends Component {
  render() {
    return (
      <Fragment>
          <h2 className="diplay-4 my-3">Rockets</h2>
          <Query query={ROCKETS_QUERY}>
          {
            ({ loading, error, data}) => {
              if(loading) return <Spiner />
              if(error) alert(error);
              console.log(data);
              return data.rockets.map(rocket => <Rocket rocket={rocket} key={rocket.rocket_id} />);
            }
          }
          </Query>
      </Fragment>
    )
  }
}

export default Lunches