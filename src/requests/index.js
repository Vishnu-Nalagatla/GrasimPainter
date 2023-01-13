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

    setBuildURL = (url) => {
        this.axios.baseURL = url;
    };

    setBearerToken = (token) => {
        this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    setHeaders = () => {
        this.axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = 'd03c44ae42da46aaa7b0b63555e54477';
    }

    sendOTP = (body) => this.axios.post(URLs.sendOTP, body);

    validateUser = body => this.axios.post(URLs.validateUser, body);

    verifyOtp = body => this.axios.post(URLs.verifyOtp, body);

}

export const API = new Requests();
