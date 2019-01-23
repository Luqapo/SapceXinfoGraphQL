const getLunches = async () => {
    const lunches = await axios.get('https://api.spacexdata.com/v3/launches');
    const lunchesList = lunches.data.map(el => el.rocket.rocket_name);
    console.log(lunchesList);
    return lunches;
}

getLunches();