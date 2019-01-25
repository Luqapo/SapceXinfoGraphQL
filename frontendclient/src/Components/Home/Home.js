import React from 'react';

import Img from '../../img/SpaceX.jpeg';

export default function Home() {
  return (
    <div>
        <h2 className="text-primary text-center">SpaceX info page</h2>
        <img src={Img} alt="rocket" className="img-fluid"/>
    </div>
  )
}
