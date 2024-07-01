// const fetch = require("node-fetch");

// const getPeople = async (fetch) => {
//   return fetch("https://swapi.dev/api/people")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       return {
//         count: data.count,
//         results: data.results,
//       };
//     });
// };

// getPeople(fetch);

const getPeoplePromise = async () => {
  const fetch = (await import("node-fetch")).default;
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

// getPeople().catch(console.error);

const getPeople = async () => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = { getPeople, getPeoplePromise };

// getPeople().catch(console.error);
// getPeople(fetch);
