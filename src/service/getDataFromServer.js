import { get } from "axios";

const parseData = response => {
  let data = response.data.split("(");
  data = data[1].replace(")", "").replace(";", "");
  return JSON.parse(data);
};

const formatData = data => {
  return data.features.map(({ id, geometry, properties }) => {
    const newTime = new Date(parseInt(properties.time));
    return {
      id: id,
      coordinates: {
        lat: geometry.coordinates[1],
        lng: geometry.coordinates[0]
      },
      place: properties.place,
      time: newTime.toLocaleTimeString(),
      date: newTime.toLocaleDateString(),
      mag: properties.mag
    };
  });
};

const getDataFromServer = () => {
  return get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp"
  )
    .then(response => parseData(response))
    .then(data => formatData(data))
    .catch(error => console.log(error));
};

export default getDataFromServer;
