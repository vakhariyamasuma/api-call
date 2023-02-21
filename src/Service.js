import axios from "axios";
export default class Service {
  static users() {
    //making api call with axios get method and returning the data from it.
    return axios.get("https://reqres.in/api/users");
  }
}
