export default {
  validateUser: '/api/user/validate',
  sendOTP: '/api/send-otp',
  validateMobile: '/node/painter/validate-mobile/',
  verifyOtp: '/node/painter/validate-otp/',
  myDayInfo: '/node/user/myday-info/',
  getCrewCalendar: '/node/painter-crew-calendar/',
  requestForQualityCheck: '/api/user/requestForQualityCheck',
  updateLeftMaterial: '/api/user/updateLeftMaterial',

  assignCrewToProject: '/sfdc/assign-crew-to-project/',
  qualityCheckRequest: '/sfdc/update-project-qc-request/',
  scheduleSiteVisit: '/sfdc/create-event/',
  myProjectDetails: '/sfdc/expose-project-details/',
  //upsertUserLeaves: '/sfdc/upsert-user-leaves/',
  upsertUserLeaves: '/sfdc/upsert-leaves-or-attendance/',
  leaveApproveForTL: '/sfdc/leave-approvals-TL/',
  getUserProfile: '/sfdc/expose-user/',


  accessToken: '/sfdc/access-token/',
  updateDatesWithoutRoomSequence:
    '/sfdc/update-room-project-dates-without-room-sequence/',
};
