import Axios from 'axios';
import URLs from './configuration';
import Config from 'react-native-config';

Axios.defaults.timeout = 20000;
Axios.defaults.headers.common['Content-Type'] = 'application/json';

class Requests {
  constructor() {
    this.axios = Axios.create({
      // baseURL: Config.API_BASE_URL,
      baseURL: 'https://grasim-nprd-webapp.azurewebsites.net',
    });
  }

  setBuildURL = url => {
    this.axios.baseURL = url;
  };

  setBearerToken = token => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  setHeaders = subscriptionKey => {
    this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      subscriptionKey;
  };

  sendOTP = body => this.axios.post(URLs.sendOTP, body);

  validateUser = body => this.axios.post(URLs.validateUser, body);

  verifyOtp = body => this.axios.post(URLs.verifyOtp, body);

  // MY DAY

  getMyDayInfo = body => {
    console.info('key...123', this.axios.defaults.headers.common);
    return this.axios.post(URLs.myDayInfo, body);
  };
  requestForQualityCheck = body =>
    this.axios.post(URLs.requestForQualityCheck, body);

  updateLeftMaterial = body => this.axios.post(URLs.updateLeftMaterial, body);

  // MY DAY
}
class SfdcAPI {
  constructor() {
    this.instance = Axios.create({
      // baseURL: Config.API_BASE_URL,
      // 00D1y0000008pqe!ARgAQCqrzgqHPiGpnZdPoELBaU3udVlGZk1F0_gdUV6kjwNaIQW3H3VBvnEXI123Cg.CA7TCYIwE1c.lB5zMOIP9SRiMJA6U
      baseURL: 'https://grasimpaints-api.azure-api.net',
    });
  }

  setBuildURL = url => {
    this.instance.baseURL = url;
  };

  setBearerToken = token => {
    console.info('token..', token);
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  setHeaders = subscriptionKey => {
    this.instance.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      subscriptionKey;
  };

  accessToken = body => this.instance.post(URLs.accessToken, body);

  assignCrewToProject = body => {
    return this.instance.post(URLs.assignCrewToProject, body);
  };

  requestForQualityCheck = (projectId, body) =>
    this.instance.patch(`${URLs.qualityCheckRequest}${projectId}`, body);

  // scheduleSiteVisit = body => {
  //   return this.instance.post(URLs.scheduleSiteVisit, body);
  // };

  scheduleSiteVisit = body => this.instance.post(URLs.scheduleSiteVisit, body);

  qualityCheckRequest;
}

export const API = new Requests();
export const SFDC_API = new SfdcAPI();
