import axios from "axios";

const BASE_URL="https://6570e93609586eff66421bf2.mockapi.io/api/v1/";

export const instanceCars = axios.create({
    baseURL: BASE_URL,
    headers: {'content-type':'application/json'},
    // params:{
    //   limit:12,
    // }
  });