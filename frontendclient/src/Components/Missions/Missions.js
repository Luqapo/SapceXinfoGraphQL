import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Spiner from '../UI/Spiner/Spiner';
import Mission from '../Mission/Mission';

const MISSIONS_QUERY = gql`
query MissionsQuery {
  missions {
    mission_name
    mission_id
    manufacturers
    payload_ids
    description
    }
}
`;

export class Missions extends Component {
  render() {
    return (
      <Fragment>
          <h2 className="diplay-4 my-3">Missions</h2>
          <Query query={MISSIONS_QUERY}>
          {
            ({ loading, error, data}) => {
              if(loading) return <Spiner />
              if(error) alert(error);
              console.log(data);
              return data.missions.map(mission => <Mission mission={mission} key={mission.mission_id} />);
            }
          }
          </Query>
      </Fragment>
    )
  }
}

export default Missions;