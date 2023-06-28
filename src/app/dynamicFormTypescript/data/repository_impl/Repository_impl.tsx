import { Daum } from "../../module/model/countryList";
import { Country } from "../../module/services/api_client";
import { Repository } from "../../module/services/remote_repository/Repository";

export default class RepositoryImpl implements Repository {
  private static _instance: RepositoryImpl;
  constructor() { }

  public static get instance() {
    return this._instance ?? (this._instance = new RepositoryImpl())
  }

  async getCountryData(){
    try {
      const post = await Country.getCountryList().then((response)=> response.data)
      console.log(post,"impl");
      return post
    } catch(error) {
       //Log errors
      }
    };
 }
