import axios, { AxiosResponse } from "axios";
import Group from "../models/Group";

export default class GroupAPI {
  static getAllGroups = async () => {
    let apiRequest: AxiosResponse<Group[]> = await axios.get(
      "https://localhost:49155/Groups"
    );
    return apiRequest.data;
  };
}
