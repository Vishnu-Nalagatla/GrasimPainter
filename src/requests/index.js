import Axios from 'axios';
import URLs from './configuration';
import Config from 'react-native-config';

Axios.defaults.timeout = 20000;
Axios.defaults.headers.common['Content-Type'] = 'application/json';

class Requests {
  constructor() {
    this.axios = Axios.create({
      baseURL: Config.API_BASE_URL,
    });
  }

  setBuildURL = url => {
    this.axios.baseURL = url;
  };

  setBearerToken = token => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  sendOTP = body => this.axios.post(URLs.sendOTP, body);

  validateUser = body => this.axios.post(URLs.validateUser, body);
}

export const API = new Requests();
