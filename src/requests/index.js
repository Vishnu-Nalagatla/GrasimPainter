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

  setHeaders = () => {
    this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      Config.MIDDLE_WARE_SUBSCRIPTION_KEY;
  };

  sendOTP = body => this.axios.post(URLs.validateMobile, body);

  validateUser = body => this.axios.post(URLs.validateMobile, body);

  verifyOtp = body => this.axios.post(URLs.verifyOtp, body);

  // MY DAY

  getMyDayInfo = body => {
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
      baseURL: Config.API_BASE_URL,
      // 00D1y0000008pqe!ARgAQCqrzgqHPiGpnZdPoELBaU3udVlGZk1F0_gdUV6kjwNaIQW3H3VBvnEXI123Cg.CA7TCYIwE1c.lB5zMOIP9SRiMJA6U
    });
  }

  setBuildURL = url => {
    this.instance.baseURL = url;
  };

  setBearerToken = token => {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  setHeaders = () => {
    this.instance.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      Config.SFDC_SUBSCRIPTION_KEY;
  };

  accessToken = () => {
    this.instance
      .post(URLs.accessToken, Config.SFDC_SUBSCRIPTION_KEY)
      .then(res => {
        const {access_token} = res.data;
        console.info('access_token: ', access_token);
        SFDC_API.setBearerToken(access_token);
      })
      .catch(err => {
        console.log('access token error', err);
      });
  };

  assignCrewToProject = body => {
    return this.instance.post(URLs.assignCrewToProject, body);
  };

  requestForQualityCheck = (projectId, body) =>
    this.instance.patch(`${URLs.qualityCheckRequest}${projectId}`, body);

  // scheduleSiteVisit = body => {
  //   return this.instance.post(URLs.scheduleSiteVisit, body);
  // };

  scheduleSiteVisit = body => this.instance.post(URLs.scheduleSiteVisit, body);
  // a061y000000EvVzAAK
  updateDatesWithoutRoomSequence = (projectId, body) => {
    console.info(
      'updateDatesWithoutRoomSequence...',
      `${URLs.updateDatesWithoutRoomSequence}${projectId}`,
    );
    return this.instance.patch(
      `${URLs.updateDatesWithoutRoomSequence}${projectId}`,
      body,
    );
  };
}

export const API = new Requests();
export const SFDC_API = new SfdcAPI();
