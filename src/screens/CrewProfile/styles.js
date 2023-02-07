import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import ViewPort from '../../constants/view-port';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sliderTrack,
    padding: 16 * vh,
  },
  profileInfo: {
    width: 328 * vw,
    height: 406 * vh,
    backgroundColor: colors.white,
    marginBottom: 16 * vh,
    borderRadius: 8 * vh,
    marginTop: 24 * vh,
    padding: 16 * vh,
  },
  insights: {
    width: 328 * vw,
    height: 232 * vh,
    backgroundColor: colors.white,
    borderRadius: 8 * vh,
    marginBottom: 42 * vh,
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  profilePic: {
    width: 32 * vw,
    height: 32 * vh,
    borderRadius: 16 * vh,
    backgroundColor: 'red',
    marginRight: 12 * vw,
  },
  mobileBlack: {
    width: 24 * vw,
    height: 24 * vh,
  },
  info: {
    alignItems: 'center',
  },
  employeeName: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14 * vh,
    lineHeight: 18 * vh,
    color: colors.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    marginTop: 6 * vh,
    marginRight: 16 * vh,
    paddingHorizontal: 4 * vw,
    paddingVertical: 2 * vh,
    backgroundColor: '#F3D467',
    color: colors.black,
    borderRadius: 8 * vh,
  },
  skillsWrapper: {
    flexDirection: 'row',
    marginBottom: 20 * vh,
    marginTop: 22 * vh,
  },
  skill: {
    paddingHorizontal: 12 * vw,
    paddingVertical: 6 * vh,
    backgroundColor: colors.carteBlanche,
    marginRight: 12 * vw,
    borderRadius: 8 * vh,
    marginTop: 12 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 16 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  infoRow: {
    width: 296 * vw,
    height: 42 * vh,
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
  },
  crewInfo: {
    borderRadius: 8 * vw,
    overflow: 'hidden',
  },

  infoRowOdd: {
    width: 296 * vw,
    height: 42 * vh,
    backgroundColor: colors.carteBlanche,
    flexDirection: 'row',
  },
  key: {
    width: '60%',
    paddingVertical: 12 * vh,
    paddingLeft: 12 * vw,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  value: {
    width: '40%',
    paddingVertical: 12 * vh,
    paddingLeft: 12 * vw,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  insightsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  insightsLabel: {
    paddingLeft: 16 * vw,
    paddingTop: 16 * vh,
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * vh,
    lineHeight: 24 * vh,
    color: colors.black,
    marginBottom: 24 * vh,
  },
  insightCard: {
    width: 140 * vw,
    height: 68 * vh,
    backgroundColor: colors.sliderTrack,
    marginLeft: 16 * vw,
    marginBottom: 16 * vh,
    borderRadius: 8 * vh,
  },
  insightKey: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: 'rgba(0, 0, 0, 0.6);',
    paddingTop: 12 * vh,
    paddingLeft: 12 * vw,
  },
  insightValue: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12 * vh,
    lineHeight: 18 * vh,
    color: colors.black,
    paddingTop: 12 * vh,
    paddingLeft:  12 * vw,
  },
});

export default styles;