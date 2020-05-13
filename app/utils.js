const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
module.exports.random = random;
module.exports.getData = (min, max, count) => {
  const array = new Array(count).map(() => random(min, max));

}