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
    this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      Config.MIDDLE_WARE_SUBSCRIPTION_KEY;
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

  getCrewCalendar = body => this.axios.post(URLs.getCrewCalendar, body);

  // MY DAY

  getMyDayInfo = body => {
    return this.axios.post(URLs.myDayInfo, body);
  };
  requestForQualityCheck = body =>
    this.axios.post(URLs.requestForQualityCheck, body);

  updateLeftMaterial = body => this.axios.post(URLs.updateLeftMaterial, body);
}

class SfdcAPI {
  constructor() {
    this.instance = Axios.create({
      baseURL: Config.API_BASE_URL,
    });
    this.instance.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
      Config.SFDC_SUBSCRIPTION_KEY;
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

  myProjectDetails = body => this.instance.post(URLs.myProjectDetails, body);

  requestForQualityCheck = (projectId, body) =>
    this.instance.patch(`${URLs.qualityCheckRequest}${projectId}`, body);

  scheduleSiteVisit = body => this.instance.post(URLs.scheduleSiteVisit, body);

  updateDatesWithoutRoomSequence = (projectId, body) => {
    return this.instance.patch(
      `${URLs.updateDatesWithoutRoomSequence}${projectId}`,
      body,
    );
  };

  upsertUserLeaves = body => {
    return this.instance.patch(URLs.upsertUserLeaves, body);
  };
  leaveApproveForTL = tlId => {
    return this.instance.get(`${URLs.leaveApproveForTL}${tlId}`);
  };

  getUserProfile = phone => {
    return this.instance.get(`${URLs.getUserProfile}${phone}`);
  };
  updateLeftMaterial = (projectId,body) => 
  this.instance.patch(`${URLs.updateLeftMaterial}${projectId}`, body);

  getNotifications = tlId => {
    console.info('getNotifications..', tlId);
    console.info('getNotifications..', URLs.getNotifications);
    return this.instance.get(`${URLs.getNotifications}${tlId}`);
  };


}

export const API = new Requests();
export const SFDC_API = new SfdcAPI();
