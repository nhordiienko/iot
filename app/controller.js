const { random } = require('./utils');

module.exports.getDataFromSensors = (req, res) => {
  res.status(200).json({
    temperatureBuild: getData(random(5, 20), () => random(200, 250) / 10),
    temperatureBody: getData(random(5, 20), () => random(360, 370) / 10),
    timeOfActivity: getData(random(20, 80), () => random(800, 2200) * 36000),
    pressure: getData(random(5, 20), () => [random(100, 140), random(60, 100)]),
  })
}


const getData = (count, action) => {
  const res = []
  for (let i = 0; i < count; i++) {
    res.push(action());
  }
  return res;
};
