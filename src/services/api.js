import axios from "axios";

const BasicURL = "https://swapi.dev/api/";
const getData = (query) => axios.get(`${BasicURL}${query}/`);

export { getData };
