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

  markAttendance = body => this.axios.post(URLs.markAttendance, body);

  applyLeave = body => this.axios.post(URLs.applyLeave, body);

  getLeavesHistory = body => this.axios.post(URLs.leavesHistory, body);

  getLeavesApproval = body => this.axios.post(URLs.leavesApproval, body);

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
  updateLeftMaterial = (projectId, body) =>
    this.instance.patch(`${URLs.updateLeftMaterial}${projectId}`, body);

  getNotifications = tlId => {
    return this.instance.get(`${URLs.getNotifications}${tlId}`);
  };

  updateNotification = (id, body) =>
    this.instance.post(`${URLs.updateNotification}${id}`, body);

  getTrainingsInfo = id => this.instance.get(`${URLs.teamLeadtraining}${id}`);

  getCrewTrainingInfo = id => this.instance.get(`${URLs.crewTraining}${id}`);

  upsertLeaves = body => {
    return this.instance.patch(`${URLs.upsertLeaves}`, body);
  };

  updateSiteChecklist = (id, body) =>
    this.instance.patch(`${URLs.updateSiteChecklist}${id}`, body);
}

class AemAPI {
  constructor() {
    this.axios = Axios.create({
      baseURL: Config.AEM_BASE_URL,
    });
    // this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] =
    // Config.MIDDLE_WARE_SUBSCRIPTION_KEY;
  }

  getSiteCheckListData = () => {
    return this.axios.get(`${URLs.getSiteCheckList}`);
  };
}

export const API = new Requests();
export const SFDC_API = new SfdcAPI();
export const AEM_API = new AemAPI();
