/**
 * Creates data set for LineChart
 * 
 * @param {Number} numItems 
 * @returns {Array<Object<>>}
 */
export const createDummyData = (numItems) => {
  let data = [];
  let baseTime = new Date('2020-01-01T00:00:00').getTime();
  let mins = 24 * 60 * 60;

  for (let i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * mins),
      value: Math.abs(3 * Math.random())
    })
  }
  return data;
}

/**
 * Creates single dummy data row from current moment in time
 * @returns {Object<>}
 */
export const createDummyNow = () => {
  return {time: new Date(), value: Math.abs(3 * Math.random())}
}