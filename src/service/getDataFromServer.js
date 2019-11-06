const getDtatFromServer = () => {
  return fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp')
}