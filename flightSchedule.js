function flightSchedule(arr) {
  const mapFromCity = {};
  const mapToCity = {};
  const numberOfFlights = arr.length;
  let startCity = "";

  for (let i = 0; i < numberOfFlights; i++) {
    const fromCity = arr[i].from;
    const toCity = arr[i].to;
    mapFromCity[fromCity] = arr[i];
    mapToCity[toCity] = arr[i];

    if (!(fromCity in mapToCity)) {
      startCity = fromCity;
    }
  }

  let schedule = [];

  for (let i = 0; i < numberOfFlights; i++) {
    const currentCites = mapFromCity[startCity];
    schedule.push(currentCites);
    startCity = currentCites.to;
  }

  return schedule;
}

let arr = [
  { from: "London", to: "Moscow" },
  { from: "Berlin", to: "London" },
  { from: "Moscow", to: "Paris" },
];

console.log(flightSchedule(arr));
// output
// [
//   { from: 'Berlin', to: 'London' },
//   { from: 'London', to: 'Moscow' },
//   { from: 'Moscow', to: 'Paris' }
// ]
