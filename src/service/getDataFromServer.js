import { get } from "axios";

const getDataFromServer = () => {
  return get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp"
  )
    .then(response => response.data)
    .then(data => {
      data = data.split("(");
      data = data[1].replace(")", "");
      data = data.replace(";", "");
      return JSON.parse(data);
    })
    .then(data =>
      data.features.map(data => ({
        id: data.id,
        coordinates: {
          lng: data.geometry.coordinates[0],
          lat: data.geometry.coordinates[1]
        },
        place: data.properties.place,
        time: data.properties.time,
        mag: data.properties.mag,
        type: data.properties.type
      }))
    )
    .catch(error => console.log(error));
};

export default getDataFromServer;
