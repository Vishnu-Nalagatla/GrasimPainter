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

  setHeaders = () => {
    this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      'd03c44ae42da46aaa7b0b63555e54477';
  };

  sendOTP = body => this.axios.post(URLs.sendOTP, body);

  validateUser = body => this.axios.post(URLs.validateUser, body);

  verifyOtp = body => this.axios.post(URLs.verifyOtp, body);

  // MY DAY

  getMyDayInfo = body => this.axios.post(URLs.myDayInfo, body);
  requestForQualityCheck = body =>
    this.axios.post(URLs.requestForQualityCheck, body);
  assignCrewToProject = body => this.axios.post(URLs.assignCrewToProject, body);
  updateLeftMaterial = body => this.axios.post(URLs.updateLeftMaterial, body);

  // MY DAY
}
class SfdcAPI {
  constructor() {
    this.axios = Axios.create({
      // baseURL: Config.API_BASE_URL,
      baseURL: 'https://grasimpaints-api.azure-api.net/',
    });
  }

  setBuildURL = url => {
    this.axios.baseURL = url;
  };

  setBearerToken = token => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  setHeaders = () => {
    this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      'd03c44ae42da46aaa7b0b63555e54477';
  };

  assignCrewToProject = body => this.axios.post(URLs.assignCrewToProject, body);

  qualityCheckRequest = (projectId, body) => {
    return this.axios.get(`${URLs.qualityCheckRequest}${projectId}`, body);
  };

  scheduleSiteVisit = body => this.axios.post(URLs.assignCrewToProject, body);

  qualityCheckRequest;
}

export const API = new Requests();
export const SFDC_API = new SfdcAPI();
